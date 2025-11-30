// Fix para inputs del menú en móviles
// Hacer scroll automático cuando el teclado aparece

(function() {
  'use strict';
  
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
  
  // Escuchar eventos de focus en inputs dentro del menú
  document.addEventListener('DOMContentLoaded', function() {
    var navegacionGlobal = document.getElementById('navegacionglobal');
    
    if (navegacionGlobal) {
      // Seleccionar todos los inputs y textareas del menú
      var inputs = navegacionGlobal.querySelectorAll('input, textarea, select');
      
      inputs.forEach(function(input) {
        // Cuando el input recibe focus
        input.addEventListener('focus', function() {
          scrollToInput(this);
        });
        
        // Prevenir comportamiento por defecto de iOS que hace zoom
        input.addEventListener('touchstart', function(e) {
          // Solo en dispositivos móviles
          if (window.innerWidth <= 768) {
            this.style.fontSize = '16px';
          }
        });
      });
    }
  });
  
  // ⚠️ SECCIÓN PROBLEMÁTICA REMOVIDA ⚠️
  // La siguiente sección estaba causando el bug del fondo blanco
  // NO ajustar el height cuando cambia el viewport
  
  /*
  // ❌ ESTO CAUSABA EL BUG - NO USAR
  var resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      var navegacionGlobal = document.getElementById('navegacionglobal');
      var checkbox = document.getElementById('estadomenu');
      
      if (checkbox && checkbox.checked && navegacionGlobal) {
        navegacionGlobal.style.height = window.innerHeight + 'px';
      }
    }, 100);
  });
  */
  
  // Restaurar scroll cuando se cierra el teclado
  document.addEventListener('focusout', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      setTimeout(function() {
        // Solo resetear el scroll, no tocar el height
        window.scrollTo(0, 0);
      }, 100);
    }
  });
})();