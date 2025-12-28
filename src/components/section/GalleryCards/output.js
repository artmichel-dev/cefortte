/**
 * output.js - Optimizado
 * Funciones extraídas del output.js original, manteniendo solo lo necesario
 * para el componente gallery.
 *
 * Funcionalidades conservadas del original:
 * - Feature detection (browser/OS)
 * - Clase 'js' en html (reemplaza 'no-js')
 * - Detección de reduced-motion
 * - Detección de touch
 * - Detección de Safari
 * - Clase 'enhanced' para navegadores compatibles
 */

(function () {
  "use strict";

  // === Módulo 17/30/31/32: Browser & OS Detection ===
  const navigator = window.navigator || { userAgent: "", platform: "", vendor: "" };
  const browserInfo = { ua: navigator.userAgent, platform: navigator.platform, vendor: navigator.vendor };

  const browserTests = [
    {
      name: "edge",
      test: function (info) {
        return info.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === info.ua;
      },
    },
    {
      name: "edgeChromium",
      test: function (info) {
        return info.ua.indexOf("Edg") > -1 && info.ua.indexOf("Edge") === -1;
      },
    },
    {
      name: "chrome",
      test: function (info) {
        return info.ua.indexOf("Chrome") > -1;
      },
    },
    {
      name: "firefox",
      test: function (info) {
        return info.ua.indexOf("Firefox") > -1 && info.ua.indexOf("Opera") === -1;
      },
    },
    {
      name: "android",
      test: function (info) {
        return info.ua.indexOf("Android") > -1;
      },
    },
    {
      name: "safari",
      test: function (info) {
        return info.ua.indexOf("Safari") > -1 && info.vendor.indexOf("Apple") > -1;
      },
    },
    {
      name: "ie",
      test: function (info) {
        return info.ua.indexOf("IE") > -1 || info.ua.indexOf("Trident") > -1;
      },
    },
    {
      name: "samsung",
      test: function (info) {
        return info.ua.indexOf("SamsungBrowser") > -1;
      },
    },
  ];

  const osTests = [
    {
      name: "windows",
      test: function (info) {
        return info.ua.indexOf("Windows") > -1;
      },
    },
    {
      name: "osx",
      test: function (info) {
        return info.ua.indexOf("Macintosh") > -1;
      },
    },
    {
      name: "ios",
      test: function (info) {
        return info.ua.indexOf("iPhone") > -1 || info.ua.indexOf("iPad") > -1;
      },
    },
    {
      name: "linux",
      test: function (info) {
        return (info.ua.indexOf("Linux") > -1 || info.platform.indexOf("Linux") > -1) && info.ua.indexOf("Android") === -1;
      },
    },
    {
      name: "android",
      test: function (info) {
        return info.ua.indexOf("Android") > -1;
      },
    },
    {
      name: "chromeos",
      test: function (info) {
        return info.ua.indexOf("CrOS") > -1;
      },
    },
  ];

  function detectFeatures(tests, info) {
    const result = {};
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      if (typeof test.test === "function" && test.test(info)) {
        result[test.name] = true;
      }
    }
    return result;
  }

  const browser = detectFeatures(browserTests, browserInfo);
  const os = detectFeatures(osTests, browserInfo);

  // === Módulo 29: Reduced Motion Detection ===
  function prefersReducedMotion() {
    const mq = window.matchMedia("(prefers-reduced-motion)");
    return mq && mq.matches;
  }

  // === Módulo 47: Touch Detection ===
  function hasTouch() {
    return !!("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
  }

  // === Módulo 93/94: Tablet Detection (para mobile-devices) ===
  function isDesktop() {
    return (!hasTouch() && !window.orientation) || os.windows;
  }

  function isTablet() {
    let screenWidth = window.screen.width;
    if (window.orientation && window.screen.height < screenWidth) {
      screenWidth = window.screen.height;
    }
    return !isDesktop() && screenWidth >= 600;
  }

  // === Módulo 88/90: FeatureDetect Class ===
  function FeatureDetect(target, initialTests) {
    this._target = target;
    this._tests = initialTests || {};
  }

  FeatureDetect.prototype.addTests = function (tests) {
    Object.assign(this._tests, tests);
  };

  FeatureDetect.prototype._supports = function (name) {
    if (this._tests[name] === undefined) return false;
    if (typeof this._tests[name] === "function") {
      this._tests[name] = this._tests[name]();
    }
    return this._tests[name];
  };

  FeatureDetect.prototype._addClass = function (name, prefix) {
    prefix = prefix || "no-";
    if (this._supports(name)) {
      this._target.classList.add(name);
    } else {
      this._target.classList.add(prefix + name);
    }
  };

  FeatureDetect.prototype.htmlClass = function () {
    this._target.classList.remove("no-js");
    this._target.classList.add("js");
    for (const name in this._tests) {
      if (this._tests.hasOwnProperty(name)) {
        this._addClass(name);
      }
    }
  };

  // === Módulo 91: Initial Tests ===
  const initialTests = {
    touch: hasTouch,
    "progressive-image": true,
  };

  // === Módulo 87: Main Initialization ===
  const htmlElement = document.documentElement;
  const isAow = htmlElement.classList.contains("aow");
  const isTabletOnMac = isTablet() && os.osx;
  const reducedMotion = prefersReducedMotion();

  const featureDetect = new FeatureDetect(htmlElement, initialTests);

  featureDetect.addTests({
    "mobile-devices": os.ios || os.android || isTabletOnMac,
    enhanced: ![isAow, os.android, browser.edge, reducedMotion].some(function (v) {
      return v === true;
    }),
    "reduced-motion": reducedMotion,
    safari: browser.safari,
  });

  featureDetect.htmlClass();

  // === Módulo 92: Focus Method Tracking ===
  function FocusMethod(target, attr) {
    this._target = target || document.body;
    this._attr = attr || "data-focus-method";
    this._focusMethod = false;
    this._lastFocusMethod = false;

    this._onKeyDown = this._onKeyDown.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onWindowBlur = this._onWindowBlur.bind(this);

    this._bindEvents();
  }

  FocusMethod.prototype._bindEvents = function () {
    this._target.addEventListener("keydown", this._onKeyDown, true);
    this._target.addEventListener("mousedown", this._onMouseDown, true);
    this._target.addEventListener("touchstart", this._onTouchStart, true);
    this._target.addEventListener("focus", this._onFocus, true);
    this._target.addEventListener("blur", this._onBlur, true);
    window.addEventListener("blur", this._onWindowBlur);
  };

  FocusMethod.prototype._onKeyDown = function () {
    this._focusMethod = "key";
  };

  FocusMethod.prototype._onMouseDown = function () {
    if (this._focusMethod !== "touch") {
      this._focusMethod = "mouse";
    }
  };

  FocusMethod.prototype._onTouchStart = function () {
    this._focusMethod = "touch";
  };

  FocusMethod.prototype._onFocus = function (e) {
    if (!this._focusMethod) {
      this._focusMethod = this._lastFocusMethod;
    }
    e.target.setAttribute(this._attr, this._focusMethod);
    this._lastFocusMethod = this._focusMethod;
    this._focusMethod = false;
  };

  FocusMethod.prototype._onBlur = function (e) {
    e.target.removeAttribute(this._attr);
  };

  FocusMethod.prototype._onWindowBlur = function () {
    this._focusMethod = false;
  };

  // Initialize FocusMethod on DOMContentLoaded
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
      new FocusMethod();
    });
  }
})();
