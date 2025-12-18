"use client";

import { useEffect } from "react";

/**
 * Hook para manejar el comportamiento de inputs en móviles
 * Hace scroll automático cuando el teclado aparece y previene zoom en iOS
 */
export default function useInputMobileFix() {
  useEffect(() => {
    // Función para hacer scroll al input cuando recibe focus
    function scrollToInput(element) {
      // Esperar un poco para que el teclado aparezca
      setTimeout(function() {
        // Calcular la posición del input
        var inputRect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        
        // Si el input está en la mitad inferior de la pantalla
        if (inputRect.top > windowHeight / 2) {
          // Hacer scroll para centrar el input
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 150);
    }

    // Buscar el elemento navegacionglobal
    var navegacionGlobal = document.getElementById('navegacionglobal');
    
    if (!navegacionGlobal) {
      // Si no existe el elemento, no hacer nada
      return;
    }

    // Seleccionar todos los inputs y textareas del menú
    var inputs = navegacionGlobal.querySelectorAll('input, textarea, select');
    
    // Handlers que necesitamos para el cleanup
    var focusHandlers = [];
    var touchstartHandlers = [];
    
    inputs.forEach(function(input) {
      // Handler para focus
      var focusHandler = function() {
        scrollToInput(this);
      };
      
      // Handler para touchstart
      var touchstartHandler = function(e) {
        // Solo en dispositivos móviles
        if (window.innerWidth <= 768) {
          this.style.fontSize = '16px';
        }
      };
      
      // Guardar referencias para cleanup
      focusHandlers.push({ element: input, handler: focusHandler });
      touchstartHandlers.push({ element: input, handler: touchstartHandler });
      
      // Añadir listeners
      input.addEventListener('focus', focusHandler);
      input.addEventListener('touchstart', touchstartHandler);
    });
    
    // Handler para focusout (global)
    var focusoutHandler = function(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        setTimeout(function() {
          // Solo resetear el scroll, no tocar el height
          window.scrollTo(0, 0);
        }, 100);
      }
    };
    
    // Añadir listener global de focusout
    document.addEventListener('focusout', focusoutHandler);
    
    // Cleanup function
    return function() {
      // Remover listeners de focus
      focusHandlers.forEach(function(item) {
        item.element.removeEventListener('focus', item.handler);
      });
      
      // Remover listeners de touchstart
      touchstartHandlers.forEach(function(item) {
        item.element.removeEventListener('touchstart', item.handler);
      });
      
      // Remover listener global de focusout
      document.removeEventListener('focusout', focusoutHandler);
    };
  }, []); // Array vacío = solo se ejecuta una vez al montar
}

