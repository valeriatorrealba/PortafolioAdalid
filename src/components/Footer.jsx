import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-500 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Valeria Torrealba</p>
          </div>

          <div className="text-sm text-gray-300">&copy; {currentYear} Todos los derechos reservados</div>

          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#home"className="hover:text-fuchsia-500 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-fuchsia-500 transition-colors"> Sobre Mí </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-fuchsia-500 transition-colors"> Proyectos </a>
              </li>
              <li>
                <a href="#Skills"className="hover:text-fuchsia-500 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-fuchsia-500 transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
