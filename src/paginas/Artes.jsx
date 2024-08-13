import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const artesItems = {
  Pintura: [
    {
      id: 16,
      title: "Mi Ecuador en un Cuadro",
      description: "Permite a los clientes crear su propia obra de arte inspirada en paisajes, tradiciones o personajes icónicos de Ecuador. Ofrecemos una galería de pinturas de reconocidos artistas ecuatorianos como Oswaldo Guayasamín, Eduardo Kingman, y Olga Albán como base para la personalización. Los clientes pueden agregar elementos como colores, texturas y figuras. También colaboramos con artistas locales para piezas exclusivas y utilizamos inteligencia artificial para sugerencias de personalización.",
      price: 200,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 17,
      title: "Rutas Artísticas Virtuales",
      description: "Crea un recorrido virtual por los principales museos y galerías de arte de Ecuador. Los usuarios pueden sumergirse en espacios artísticos con realidad virtual, explorar obras y adquirir reproducciones. Incluye elementos interactivos como juegos de realidad aumentada para una experiencia educativa y divertida.",
      price: 10,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 18,
      title: "Arte para Todos",
      description: "Modelo de suscripción que ofrece obras de arte originales o reproducciones periódicamente. Incluye suscripciones personalizadas y clubes de arte con contenido exclusivo y talleres en línea. Colaboramos con artistas ecuatorianos para ediciones limitadas.",
      price: 100,
      imageUrl: "https://via.placeholder.com/150"
    }
  ],
  Escultura: [
    {
      id: 19,
      title: "Esculturas Personalizadas con Historia",
      description: "Permite a los clientes diseñar su propia escultura a través de un configurador 3D en línea, eligiendo materiales y detalles. Cada escultura incluye una historia o leyenda ecuatoriana y un certificado digital de autenticidad.",
      price: 200,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 20,
      title: "Suscripciones a Obras de Arte Rotativas",
      description: "Modelo de suscripción que entrega una nueva escultura cada mes, permitiendo descubrir nuevos artistas ecuatorianos. Incluye eventos virtuales con los artistas y curaduría experta para asegurar calidad y relevancia cultural.",
      price: 100,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 21,
      title: "Realidad Aumentada para Visualizar Esculturas en Espacios Reales",
      description: "Aplicación móvil que permite visualizar esculturas en el espacio físico del cliente usando realidad aumentada. Incluye un catálogo interactivo y asesoramiento personalizado a través de videollamadas.",
      price: 5,
      imageUrl: "https://via.placeholder.com/150"
    }
  ],
  Fotografía: [
    {
      id: 22,
      title: "Ecuador en un Click: Suscripciones Fotográficas Personalizadas",
      description: "Suscripciones mensuales o anuales para recibir fotografías de alta calidad representando diversas regiones y costumbres de Ecuador. Incluye opciones de impresión y productos personalizados.",
      price: 50,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 23,
      title: "Mi Ecuador Fotográfico: Talleres Online y Kits Creativos",
      description: "Talleres online de fotografía y kits creativos para capturar la esencia de Ecuador. Incluye talleres interactivos y kits adaptados a diferentes niveles de experiencia, con colaboración de fotógrafos locales.",
      price: 250,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 24,
      title: "Ecuador en Foco: Marketplace de Fotografía Artística",
      description: "Plataforma online para comprar y vender fotografías artísticas de Ecuador. Incluye curaduría de contenido, herramientas de búsqueda avanzada y opciones de enmarcado e impresión.",
      price: 20,
      imageUrl: "https://via.placeholder.com/150"
    }
  ],
  ArtePopular: [
    {
      id: 25,
      title: "Réplica de Máscara Ceremonial",
      description: "Réplica de una máscara ceremonial de las antiguas culturas andinas de Ecuador, confeccionada en madera y decorada a mano. Captura la esencia de las tradiciones ancestrales.",
      price: 100,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 26,
      title: "Set de Títeres de Mano",
      description: "Set de títeres representando personajes tradicionales de leyendas ecuatorianas. Cada títere está elaborado a mano con materiales sostenibles y técnicas ancestrales.",
      price: 80,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 27,
      title: "Boleto para la Ópera Virtual 'El Canto del Cóndor'",
      description: "Boleto para la ópera virtual 'El Canto del Cóndor', que fusiona música clásica con ritmos autóctonos ecuatorianos. También disponible para presenciar en el teatro Nacional Sucre.",
      price: 25,
      imageUrl: "https://via.placeholder.com/150"
    }
  ],
  Trajes: [
    {
      id: 28,
      title: "Traje de Danza Tradicional",
      description: "Traje de danza tradicional ecuatoriana, confeccionado con tejidos de alta calidad y adornado con bordados representativos de las distintas regiones del país.",
      price: 120,
      imageUrl: "https://via.placeholder.com/150"
    }
  ],
  Circo: [
    {
      id: 29,
      title: "Circo Vivo Ecuador",
      description: "Experiencia participativa en el Circo Vivo Ecuador, donde los espectadores aprenden habilidades circenses y participan en talleres dirigidos por los artistas del circo.",
      price: 25,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 30,
      title: "Circo de los Sueños Andantes",
      description: "Circo itinerante que transforma calles y plazas de Ecuador en escenarios mágicos, integrando la arquitectura local y la comunidad en el espectáculo.",
      price: 15,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 31,
      title: "Circo de las Leyendas",
      description: "Circo que presenta actos inspirados en leyendas de culturas ecuatorianas, con acrobacias y performances visualmente impactantes que reflejan héroes mitológicos y relatos épicos.",
      price: 15,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 32,
      title: "Circo de los Colores del Mundo",
      description: "Circo que celebra la diversidad cultural a través del color, con actuaciones acrobáticas y visuales que representan diferentes culturas y regiones del mundo.",
      price: 10,
      imageUrl: "https://via.placeholder.com/150"
    }
  ]
};

const Artes = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Titulo categoria */}
      <h1 className="text-3xl font-bold mb-6 text-center">Artes</h1>
      {/* Desestructuracion items para subitulos y sus items*/}
      {Object.entries(artesItems).map(([category, items]) => (
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
          <h3 className="text-lg font-semibold">{item.title}</h3>
          {/* Descripcion del producto */}
          <p className="text-gray-600 mt-2">{item.description}</p>
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

export default Artes;
