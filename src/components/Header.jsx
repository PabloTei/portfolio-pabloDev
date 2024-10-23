import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-center py-6">
      <ul className="flex justify-center items-center gap-4 p-4 border border-stone-300 rounded-3xl">
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
