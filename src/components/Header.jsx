import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-center py-6">
      <ul className="flex justify-center items-center gap-4 p-4 border border-stone-300 rounded-3xl">
        <li>
          <a aria-label="Navegar a tecnologias" href="#tecnologias">
            Tecnologías
          </a>
        </li>
        <li>
          <a aria-label="Navegar a experiencia" href="#experiencia">
            Experiencia
          </a>
        </li>
        <li>
          <a aria-label="Navegar a proyectos" href="#proyectos">
            Proyectos
          </a>
        </li>
        <li>
          <a aria-label="Navegar a contacto" href="#contacto">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
