"use client";

import useInputMobileFix from "@/hooks/useInputMobileFix";

/**
 * Componente Menu de ejemplo
 * Demuestra cómo usar el hook useInputMobileFix
 * 
 * IMPORTANTE: El <nav> debe tener id="navegacionglobal" para que el hook funcione
 */
export default function Menu() {
  // Activar el fix para inputs móviles
  useInputMobileFix();

  return (
    <nav id="navegacionglobal" className="menu-container">
      <h2>Menú de Navegación</h2>
      
      <form className="menu-form">
        <div className="form-group">
          <label htmlFor="search-input">Buscar:</label>
          <input
            type="text"
            id="search-input"
            name="search"
            placeholder="Escribe aquí..."
            className="menu-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email-input">Email:</label>
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="tu@email.com"
            className="menu-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message-textarea">Mensaje:</label>
          <textarea
            id="message-textarea"
            name="message"
            rows="4"
            placeholder="Escribe tu mensaje..."
            className="menu-textarea"
          />
        </div>

        <div className="form-group">
          <label htmlFor="country-select">País:</label>
          <select id="country-select" name="country" className="menu-select">
            <option value="">Selecciona un país</option>
            <option value="mx">México</option>
            <option value="us">Estados Unidos</option>
            <option value="es">España</option>
          </select>
        </div>

        <button type="submit" className="menu-submit">
          Enviar
        </button>
      </form>
    </nav>
  );
}

