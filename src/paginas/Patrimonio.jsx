import React, { useState }  from "react";
import { useCart } from "../context/CartContext";

const patrimonioItems = {
  Carnavales: [
    {
      "id": 1,
      "title": "Disfraces Interactivos con Realidad Aumentada",
      "description": "Disfraces tradicionales ecuatorianos (como el de la Mama Negra o el de la Diablada) que, al escanearlos con una aplicación móvil, cobran vida con animaciones y efectos especiales. Por ejemplo, un disfraz de Mama Negra podría mostrar una lluvia de confeti virtual o un baile tradicional.",
      "price": 20,
      "imageUrl": "/images/disfraces_interactivos.jpg"
    },
    {
      "id": 2,
      "title": "Sets de Juguetes y Accesorios para el Carnaval",
      "description": "Sets que incluyen juguetes típicos utilizados durante el Carnaval, como globos de agua biodegradables, espuma de carnaval ecológica, y máscaras de papel maché. Cada set puede venir con instrucciones de uso y una breve historia sobre las tradiciones del Carnaval en Ecuador.",
      "price": 5,
      "imageUrl": "/images/sets_juguetes.jpg"
    }
  ],
  Festivales: [
    {
      "id": 3,
      "title": "Experiencias Virtuales Inmersivas de Festivales",
      "description": "Crea videos de 360 grados o experiencias de realidad virtual que transporten a los clientes al corazón de los festivales más importantes de Ecuador. Podrían incluir desfiles, conciertos, gastronomía y tradiciones locales.",
      "price": 15,
      "imageUrl": "/images/experiencias_virtuales.jpg"
    }
  ],
  Artesanias: [
    {
      "id": 4,
      "title": "Textiles de Otavalo Personalizados",
      "description": "Mantas, ponchos, y cojines hechos a mano por artesanos de Otavalo, conocidos por su habilidad en el tejido. Los clientes pueden personalizar los colores y patrones, creando piezas únicas que reflejan tanto la tradición ecuatoriana como el gusto personal.",
      "price": 20,
      "imageUrl": "/images/textiles_otavalo.jpg"
    },
    {
      "id": 5,
      "title": "Cerámica de Cuenca Interactiva",
      "description": "Kits de cerámica que incluyen piezas semielaboradas de ceramistas de Cuenca junto con pinturas y pinceles. Los clientes pueden finalizar y decorar las piezas en casa, creando su propia versión de la cerámica tradicional ecuatoriana. Fomenta la creatividad y la participación activa del cliente, además de apoyar a los ceramistas locales.",
      "price": 25,
      "imageUrl": "/images/ceramica_cuenca.jpg"
    },
    {
      "id": 6,
      "title": "Esculturas y Decoraciones de Tagua",
      "description": "Esculturas, figuras decorativas y joyas hechas de tagua (conocida como el marfil vegetal) por artesanos ecuatorianos. Los productos pueden incluir animales, figuras humanas y abstractas, con una atención al detalle que resalta la belleza natural de la tagua.",
      "price": 0,
      "imageUrl": "/images/tagua.jpg"
    }
  ],
  CulinariaYGastronomia: [
    {
      "id": 7,
      "title": "Kits de Cocina Tradicional Ecuatoriana DIY",
      "description": "Kits que incluyen ingredientes locales y recetas detalladas para preparar platillos icónicos de la gastronomía ecuatoriana, como ceviche, encebollado, fanesca y hornado. Cada kit viene con instrucciones paso a paso y videos tutoriales de chefs locales.",
      "price": 45,
      "imageUrl": "/images/kits_cocina.jpg"
    },
    {
      "id": 8,
      "title": "Condimentos y Salsas Gourmet Artesanales",
      "description": "Una línea de condimentos y salsas elaboradas artesanalmente utilizando ingredientes autóctonos ecuatorianos. Esto puede incluir ajíes, salsas de frutas tropicales, y adobos tradicionales como el chimichurri ecuatoriano y el achiote.",
      "price": 10,
      "imageUrl": "/images/condimentos_salsas.jpg"
    }
  ],
  Museos: [
    {
      "id": 9,
      "title": "Artefactos y Réplicas en Miniatura",
      "description": "Réplicas en miniatura de artefactos y piezas históricas encontradas en museos ecuatorianos, como la cerámica Valdivia, máscaras precolombinas, y utensilios incas. Estas réplicas pueden ser coleccionables y venir con información histórica detallada sobre cada pieza.",
      "price": 20,
      "imageUrl": "/images/artefactos_miniatura.jpg"
    }
  ],
  Bibliotecas: [
    {
      "id": 10,
      "title": "Mi Biblioteca Virtual Ecuatoriana",
      "description": "Una plataforma digital que funciona como una biblioteca virtual personalizada. Los usuarios pueden crear su propio perfil y seleccionar los géneros literarios ecuatorianos que más les interesen. La plataforma les recomendará libros, autores y podcasts basados en sus preferencias.",
      "price": 5,
      "imageUrl": "/images/biblioteca_virtual.jpg",
      "features": [
        "Lecturas personalizadas",
        "Club de lectura virtual",
        "Eventos virtuales"
      ]
    },
    {
      "id": 11,
      "title": "Tesoros Literarios de Ecuador",
      "description": "Una tienda online especializada en libros raros, descatalogados y ediciones de colección de autores ecuatorianos.",
      "price": 40,
      "imageUrl": "/images/tesoros_literarios.jpg",
      "features": [
        "Catálogo digital interactivo",
        "Certificados de autenticidad",
        "Restauración de libros"
      ]
    },
    {
      "id": 12,
      "title": "La Biblioteca Viajera",
      "description": "Una suscripción mensual que envía a los suscriptores una caja sorpresa con un libro nuevo de un autor ecuatoriano, acompañado de objetos relacionados con el libro o con la cultura ecuatoriana (marcadores temáticos, mapas antiguos, postales, etc.) Además de promover un concurso por provincia para que los jóvenes elaboren libros sobre lo mejor de sus provincias o cantones y los ganadores puedan ser premiados con la publicación de su libro.",
      "price": 30,
      "imageUrl": "/images/biblioteca_viajera.jpg",
      "features": [
        "Temáticas mensuales",
        "Comunidades en línea",
        "Eventos presenciales"
      ]
    }
  ],
  CentrosArqueologicos: [
    {
      "id": 13,
      "title": "Adopta una Ruina",
      "description": "Los usuarios 'adoptan' simbólicamente una ruina específica de un centro arqueológico ecuatoriano. Cada ruina tendrá una página web o perfil en redes sociales con su historia, fotos y datos curiosos. Al 'adoptar' una ruina, los usuarios realizan donaciones para su conservación y restauración. Se ofrecerán experiencias exclusivas como visitas guiadas virtuales, talleres de arqueología online y la posibilidad de poner tu nombre en una placa conmemorativa en el sitio arqueológico.",
      "price": 20,
      "imageUrl": "/images/adopta_ruina.jpg"
    },
    {
      "id": 14,
      "title": "Crea tu Propio Artefacto Precolombino",
      "description": "A través de una plataforma online, los usuarios pueden diseñar su propio artefacto precolombino virtual, utilizando elementos y estilos de diferentes culturas ancestrales de Ecuador. Una vez diseñado, el usuario puede adquirir una réplica física de su artefacto, hecha a mano por artesanos ecuatorianos.",
      "price": 100,
      "imageUrl": "/images/artefacto_precolombino.jpg"
    },
    {
      "id": 15,
      "title": "Viaja en el Tiempo con Nosotros",
      "description": "Se ofrecen experiencias inmersivas y virtuales a través de realidad virtual (VR) que transportan al usuario a diferentes momentos históricos de los centros arqueológicos ecuatorianos. Los usuarios pueden visitar sitios arqueológicos remotos o de difícil acceso de manera segura y cómoda, con explicaciones detalladas sobre la historia, cultura y costumbres de las civilizaciones ancestrales.",
      "price": 10,
      "imageUrl": "/images/viaje_tiempo.jpg"
    }
  ]
  // Añadir mas si es necesario

};
const Patrimonio = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Titulo categoria */}
      <h1 className="text-3xl font-bold mb-6 text-center">Patrimonio</h1>
      {/* Desestructuracion items para subitulos y sus items*/}
      {Object.entries(patrimonioItems).map(([category, items]) => (
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

export default Patrimonio;