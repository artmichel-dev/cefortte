"use client";

import { useEffect } from "react";

/**
 * Componente para deshabilitar el menú contextual (click derecho)
 * y prevenir el arrastre de imágenes
 */
export default function DisableContextMenu() {
  useEffect(() => {
    // Deshabilitar click derecho (menú contextual)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Deshabilitar arrastre de imágenes y elementos
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Deshabilitar selección con teclado (Ctrl+A, Ctrl+C, etc.)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquear Ctrl+A (seleccionar todo)
      if (e.ctrlKey && e.key === "a") {
        e.preventDefault();
        return false;
      }
      // Bloquear Ctrl+C (copiar)
      if (e.ctrlKey && e.key === "c") {
        e.preventDefault();
        return false;
      }
      // Bloquear Ctrl+X (cortar)
      if (e.ctrlKey && e.key === "x") {
        e.preventDefault();
        return false;
      }
      // Bloquear F12 (herramientas de desarrollador)
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }
      // Bloquear Ctrl+Shift+I (inspector)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return false;
      }
      // Bloquear Ctrl+Shift+J (consola)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return false;
      }
      // Bloquear Ctrl+U (ver código fuente)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return false;
      }
    };

    // Agregar event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup al desmontar
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // Este componente no renderiza nada
}
