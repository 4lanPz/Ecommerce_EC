// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

// Imágenes de ejemplo para las categorías
import patrimonioImg from '/images/patrimonio.jpg';
import artesImg from '/images/artes.jpg';
import mediosImg from '/images/medios.jpg';
import creacionesImg from '/images/creaciones.jpg';

const categories = [
  {
    title: 'Patrimonio',
    description: 'Explora nuestra colección de artículos que representan la rica herencia cultural.',
    image: patrimonioImg,
    link: 'patrimonio'
  },
  {
    title: 'Artes',
    description: 'Descubre piezas únicas de arte hechas a mano por talentosos artesanos.',
    image: artesImg,
    link: 'artes'
  },
  {
    title: 'Medios',
    description: 'Encuentra productos y herramientas relacionadas con diversos medios artísticos.',
    image: mediosImg,
    link: 'medios'
  },
  {
    title: 'Creaciones Funcionales',
    description: 'Compra artículos artesanales que combinan estética con funcionalidad.',
    image: creacionesImg,
    link: 'creaciones-funcionales'
  }
];

const HomePage = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Categorías</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.title}
            to={category.link}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
