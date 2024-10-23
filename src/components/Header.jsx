import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-center py-6">
      <ul className="flex justify-center items-center gap-4">
        <li>
          <a href="#tecnologias">Tecnologías</a>
        </li>
        <li>
          <a href="#experiencia">Experiencia</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
