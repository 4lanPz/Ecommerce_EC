import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const creacionesItems = {
  Arquitectura: [
    {
      "id": 42,
      "title": "Materiales inteligentes para fachadas dinámicas",
      "description": "Fachadas de edificios que responden a estímulos externos como la luz solar, la temperatura o el ruido, adaptando sus propiedades para optimizar el confort interior, el ahorro energético y la estética.",
      "price": 500,
      "imageUrl": "/images/fachadas_dinamicas.jpg"
    }
  ],
  AnimacionDigital: [
    {
      "id": 43,
      "title": "Avatares digitales hiperrealistas",
      "description": "Creación de avatares digitales que son indistinguibles de personas reales, utilizados para diversas aplicaciones como influencers virtuales, asistentes virtuales y experiencias de realidad virtual inmersivas.",
      "price": 40,
      "imageUrl": "/images/avatares_digitales.jpg"
    },
    {
      "id": 44,
      "title": "Animación procedural generada por IA",
      "description": "Uso de algoritmos de inteligencia artificial para generar animaciones complejas y realistas de manera automática, reduciendo significativamente el tiempo y los costos de producción.",
      "price": 50,
      "imageUrl": "/images/animacion_procedural.jpg"
    },
    {
      "id": 45,
      "title": "Animación para terapia y rehabilitación",
      "description": "Desarrollo de animaciones interactivas diseñadas para ayudar a personas con trastornos mentales o físicos a superar desafíos y mejorar su calidad de vida.",
      "price": 60,
      "imageUrl": "/images/animacion_terapia.jpg"
    }
  ],
  Videojuegos: [
    {
      "id": 46,
      "title": "Videojuegos generativos con narrativa adaptativa",
      "description": "Juegos donde el mundo y la historia se generan de forma procedimental en función de las acciones del jugador, ofreciendo una experiencia única y personalizada cada vez que se juega.",
      "price": 60,
      "imageUrl": "/images/videojuegos_narrativa.jpg"
    },
    {
      "id": 47,
      "title": "Realidad virtual para entrenamiento profesional",
      "description": "Juegos de simulación que permiten a los profesionales practicar habilidades en un entorno seguro y controlado, como cirujanos practicando operaciones o pilotos entrenando en vuelo.",
      "price": 47,
      "imageUrl": "/images/realidad_virtual.jpg"
    },
    {
      "id": 48,
      "title": "Videojuegos para el aprendizaje de idiomas y culturas",
      "description": "Juegos educativos que sumergen al jugador en diferentes culturas y lo ayudan a aprender un nuevo idioma de manera divertida y efectiva.",
      "price": 55,
      "imageUrl": "/images/videojuegos_educativos.jpg"
    }
  ],
  Publicidad: [
    {
      "id": 49,
      "title": "Experiencias publicitarias inmersivas en realidad aumentada",
      "description": "Anuncios que utilizan la realidad aumentada para crear experiencias interactivas y personalizadas, permitiendo a los consumidores interactuar con productos y marcas de una manera completamente nueva.",
      "price": 80,
      "imageUrl": "/images/publicidad_ra.jpg"
    },
    {
      "id": 50,
      "title": "Publicidad programática basada en el estado de ánimo",
      "description": "Uso de algoritmos de inteligencia artificial para analizar las emociones de los usuarios en tiempo real y mostrar anuncios que se adapten a su estado de ánimo, aumentando la eficacia de las campañas.",
      "price": 77,
      "imageUrl": "/images/publicidad_programatica.jpg"
    },
    {
      "id": 51,
      "title": "Influencers virtuales para marketing de marca",
      "description": "Colaboraciones con influencers digitales hiperrealistas para promocionar productos y servicios, llegando a audiencias más jóvenes y conectadas.",
      "price": 80,
      "imageUrl": "/images/influencers_virtuales.jpg"
    }
  ],
  Diseno: [
    {
      "id": 52,
      "title": "Diseño de interiores modular y personalizable",
      "description": "Sistemas de mobiliario y decoración modulares que permiten a los usuarios crear espacios personalizados y adaptables a sus necesidades y gustos, facilitando la reconfiguración de los ambientes.",
      "price": 60,
      "imageUrl": "/images/diseno_interiores.jpg"
    },
    {
      "id": 53,
      "title": "Moda sostenible con materiales reciclados y tecnología inteligente",
      "description": "Creación de prendas de vestir utilizando materiales reciclados y tecnologías innovadoras como tejidos inteligentes que se adaptan a la temperatura corporal o cambian de color.",
      "price": 90,
      "imageUrl": "/images/moda_sostenible.jpg"
    },
    {
      "id": 54,
      "title": "Juguetes educativos con realidad aumentada y programación",
      "description": "Juguetes que combinan elementos físicos y digitales, permitiendo a los niños aprender conceptos de programación, ciencia y matemáticas de manera divertida e interactiva.",
      "price": 65,
      "imageUrl": "/images/juguetes_educativos.jpg"
    }
  ]
};


const Creaciones = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Titulo categoria */}
      <h1 className="text-3xl font-bold mb-6 text-center">Creaciones funcionales</h1>
      {/* Desestructuracion items para subitulos y sus items*/}
      {Object.entries(creacionesItems).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCart();

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleAddToCart = () => {
    addItemToCart(item, quantity);
    setQuantity(1); // Resetear luego de añadir
  };

  return (
    // Card
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Imagen del producto */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          {/* Titulo del producto */}
          <h2 className="text-xl font-semibold text-center">{item.title}</h2>
          {/* Descripcion del producto */}
          <p className="text-gray-600 mt-2 text-justify">{item.description}</p>
        </div>

        {/* Zona de valores */}
        <div className="mt-4 flex items-center justify-between">
          {/* Precio item */}
          <span className="text-2xl font-bold w-2/3">${item.price}</span>
          {/* Boton para aumentar o disminuir cantidad */}
          <div className="flex items-center">
            <button
              onClick={decrement}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l-lg hover:bg-gray-400"
            >
              -
            </button>
            <span className="mx-2 text-lg font-bold">{quantity}</span>
            <button
              onClick={increment}
              className="bg-gray-300 text-gray-700 px-2 py-1 mr-5 rounded-r-lg hover:bg-gray-400"
            >
              +
            </button>
          </div>
          {/* boton agregar */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Creaciones;
