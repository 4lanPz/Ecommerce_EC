import React, { useState } from "react";

const artesItems = {
  Pintura: [
    {
      id: 1,
      title: "Mi Ecuador en un Cuadro",
      description: "Permite a los clientes crear su propia obra de arte inspirada en paisajes, tradiciones o personajes icónicos de Ecuador. Ofrecemos una galería de pinturas de reconocidos artistas ecuatorianos como Oswaldo Guayasamín, Eduardo Kingman, y Olga Albán como base para la personalización. Los clientes pueden agregar elementos como colores, texturas y figuras. También colaboramos con artistas locales para piezas exclusivas y utilizamos inteligencia artificial para sugerencias de personalización.",
      price: "$200",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Rutas Artísticas Virtuales",
      description: "Crea un recorrido virtual por los principales museos y galerías de arte de Ecuador. Los usuarios pueden sumergirse en espacios artísticos con realidad virtual, explorar obras y adquirir reproducciones. Incluye elementos interactivos como juegos de realidad aumentada para una experiencia educativa y divertida.",
      price: "$10",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "Arte para Todos",
      description: "Modelo de suscripción que ofrece obras de arte originales o reproducciones periódicamente. Incluye suscripciones personalizadas y clubes de arte con contenido exclusivo y talleres en línea. Colaboramos con artistas ecuatorianos para ediciones limitadas.",
      price: "$100",
      imageUrl: "https://via.placeholder.com/150"
    }
  ],
  Escultura: [
    {
      id: 4,
      title: "Esculturas Personalizadas con Historia",
      description: "Permite a los clientes diseñar su propia escultura a través de un configurador 3D en línea, eligiendo materiales y detalles. Cada escultura incluye una historia o leyenda ecuatoriana y un certificado digital de autenticidad.",
      price: "$200",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      title: "Suscripciones a Obras de Arte Rotativas",
      description: "Modelo de suscripción que entrega una nueva escultura cada mes, permitiendo descubrir nuevos artistas ecuatorianos. Incluye eventos virtuales con los artistas y curaduría experta para asegurar calidad y relevancia cultural.",
      price: "$100",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      title: "Realidad Aumentada para Visualizar Esculturas en Espacios Reales",
      description: "Aplicación móvil que permite visualizar esculturas en el espacio físico del cliente usando realidad aumentada. Incluye un catálogo interactivo y asesoramiento personalizado a través de videollamadas.",
      price: "$5",
      imageUrl: "https://via.placeholder.com/150"
    }
  ],
  Fotografía: [
    {
      id: 7,
      title: "Ecuador en un Click: Suscripciones Fotográficas Personalizadas",
      description: "Suscripciones mensuales o anuales para recibir fotografías de alta calidad representando diversas regiones y costumbres de Ecuador. Incluye opciones de impresión y productos personalizados.",
      price: "$50 anual",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 8,
      title: "Mi Ecuador Fotográfico: Talleres Online y Kits Creativos",
      description: "Talleres online de fotografía y kits creativos para capturar la esencia de Ecuador. Incluye talleres interactivos y kits adaptados a diferentes niveles de experiencia, con colaboración de fotógrafos locales.",
      price: "$250",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 9,
      title: "Ecuador en Foco: Marketplace de Fotografía Artística",
      description: "Plataforma online para comprar y vender fotografías artísticas de Ecuador. Incluye curaduría de contenido, herramientas de búsqueda avanzada y opciones de enmarcado e impresión.",
      price: "$20",
      imageUrl: "https://via.placeholder.com/150"
    }
  ],
  ArtePopular: [
    {
      id: 10,
      title: "Réplica de Máscara Ceremonial",
      description: "Réplica de una máscara ceremonial de las antiguas culturas andinas de Ecuador, confeccionada en madera y decorada a mano. Captura la esencia de las tradiciones ancestrales.",
      price: "$100",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 11,
      title: "Set de Títeres de Mano",
      description: "Set de títeres representando personajes tradicionales de leyendas ecuatorianas. Cada títere está elaborado a mano con materiales sostenibles y técnicas ancestrales.",
      price: "$80",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 12,
      title: "Boleto para la Ópera Virtual 'El Canto del Cóndor'",
      description: "Boleto para la ópera virtual 'El Canto del Cóndor', que fusiona música clásica con ritmos autóctonos ecuatorianos. También disponible para presenciar en el teatro Nacional Sucre.",
      price: "$25",
      imageUrl: "https://via.placeholder.com/150"
    }
  ],
  Trajes: [
    {
      id: 13,
      title: "Traje de Danza Tradicional",
      description: "Traje de danza tradicional ecuatoriana, confeccionado con tejidos de alta calidad y adornado con bordados representativos de las distintas regiones del país.",
      price: "$120",
      imageUrl: "https://via.placeholder.com/150"
    }
  ],
  Circo: [
    {
      id: 14,
      title: "Circo Vivo Ecuador",
      description: "Experiencia participativa en el Circo Vivo Ecuador, donde los espectadores aprenden habilidades circenses y participan en talleres dirigidos por los artistas del circo.",
      price: "$25",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 15,
      title: "Circo de los Sueños Andantes",
      description: "Circo itinerante que transforma calles y plazas de Ecuador en escenarios mágicos, integrando la arquitectura local y la comunidad en el espectáculo.",
      price: "$15",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 16,
      title: "Circo de las Leyendas",
      description: "Circo que presenta actos inspirados en leyendas de culturas ecuatorianas, con acrobacias y performances visualmente impactantes que reflejan héroes mitológicos y relatos épicos.",
      price: "$15",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 17,
      title: "Circo de los Colores del Mundo",
      description: "Circo que celebra la diversidad cultural a través del color, con actuaciones acrobáticas y visuales que representan diferentes culturas y regiones del mundo.",
      price: "$10",
      imageUrl: "https://via.placeholder.com/150"
    }
  ]
};

const Artes = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Categoría: Artes</h1>
      {Object.keys(artesItems).map((category) => (
        <Section key={category} category={category} items={artesItems[category]} />
      ))}
    </div>
  );
};

const Section = ({ category, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-32 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">{item.price}</span>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={decrement}
              className="bg-gray-200 p-2 text-gray-600 hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increment}
              className="bg-gray-200 p-2 text-gray-600 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artes;
