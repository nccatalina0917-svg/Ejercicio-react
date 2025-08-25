import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between relative">
      <div className="text-white font-bold text-lg">Mi App</div>

      <ul className="hidden sm:flex gap-x-6 text-white">
        <li><a href="#inicio" className="hover:underline hover:text-gray-200">Inicio</a></li>
        <li><a href="#servicios" className="hover:underline hover:text-gray-200">Servicios</a></li>
        <li><a href="#contacto" className="hover:underline hover:text-gray-200">Contacto</a></li>
      </ul>

      <button
        onClick={() => {
          console.log('Menú toggled:', !menuOpen);
          setMenuOpen(!menuOpen);
        }}
        className="sm:hidden text-white text-2xl focus:outline-none"
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <ul className="absolute top-full left-0 right-0 bg-blue-600 flex flex-col gap-y-3 p-4 sm:hidden text-white">
          <li><a href="#inicio" className="hover:underline hover:text-gray-200 block">Inicio</a></li>
          <li><a href="#servicios" className="hover:underline hover:text-gray-200 block">Servicios</a></li>
          <li><a href="#contacto" className="hover:underline hover:text-gray-200 block">Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}