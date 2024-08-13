import React from "react";
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/1600x900?crafts')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Bienvenidos a nuestra tienda de artesanías
            </h2>
            <p className="text-xl mb-8">
              Encuentra las mejores piezas hechas a mano con amor y dedicación.
            </p>
            <Link
              to="dashboard"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Ver Tienda
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-lg mb-8">
            Somos un grupo de artesanos apasionados por crear productos únicos.
            Cada pieza está hecha con materiales de la más alta calidad y
            atención al detalle.
          </p>
        </div>
      </section>

      {/* Shop Section */}
      {/* <section id="shop" className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nuestra Tienda</h2>
          <p className="text-lg mb-8">Descubre nuestras colecciones y encuentra algo especial para ti o para regalar.</p>
          <a href="#contact" className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold">Contáctanos</a>
        </div>
      </section> */}

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; Ecommerce</p>
        </div>
      </footer>
    </div>
  );
};
