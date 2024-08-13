import React, { useState }  from "react";
import { Link } from "react-router-dom";

const patrimonioItems = [
  {
    id: 1,
    title: "CARNAVALES",
    description:
      "La historia del Carnaval en Ecuador es rica y diversa, con profundas raíces que se remontan a las épocas precolombinas, la influencia colonial española y la mezcla cultural que ha caracterizado al país.",
    price: "$20",
    imageUrl: "/images/patrimonio.jpg",
  },
  {
    id: 2,
    title: "Sets de Juguetes y Accesorios para el Carnaval",
    description:
      "Sets que incluyen juguetes típicos utilizados durante el Carnaval, como globos de agua biodegradables, espuma de carnaval ecológica, y máscaras de papel maché. Cada set puede venir con instrucciones de uso y una breve historia sobre las tradiciones del Carnaval en Ecuador.",
    price: "$5",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Experiencias Virtuales Inmersivas de Festivales",
    description:
      "Crea videos de 360 grados o experiencias de realidad virtual que transporten a los clientes al corazón de los festivales más importantes de Ecuador. Podrían incluir desfiles, conciertos, gastronomía y tradiciones locales.",
    price: "$15",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Textiles de Otavalo Personalizados",
    description:
      "Mantas, ponchos, y cojines hechos a mano por artesanos de Otavalo, conocidos por su habilidad en el tejido. Los clientes pueden personalizar los colores y patrones, creando piezas únicas que reflejan tanto la tradición ecuatoriana como el gusto personal.",
    price: "A PARTIR DE $20",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Cerámica de Cuenca Interactiva",
    description:
      "Kits de cerámica que incluyen piezas semielaboradas de ceramistas de Cuenca junto con pinturas y pinceles. Los clientes pueden finalizar y decorar las piezas en casa, creando su propia versión de la cerámica tradicional ecuatoriana.",
    price: "$25",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Esculturas y Decoraciones de Tagua",
    description:
      "Esculturas, figuras decorativas y joyas hechas de tagua (conocida como el marfil vegetal) por artesanos ecuatorianos. Los productos pueden incluir animales, figuras humanas y abstractas, con una atención al detalle que resalta la belleza natural de la tagua.",
    price: "VARIA SEGÚN EL TAMAÑO",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Kits de Cocina Tradicional Ecuatoriana DIY",
    description:
      "Kits que incluyen ingredientes locales y recetas detalladas para preparar platillos icónicos de la gastronomía ecuatoriana, como ceviche, encebollado, fanesca y hornado. Cada kit viene con instrucciones paso a paso y videos tutoriales de chefs locales.",
    price: "$45",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Condimentos y Salsas Gourmet Artesanales",
    description:
      "Una línea de condimentos y salsas elaboradas artesanalmente utilizando ingredientes autóctonos ecuatorianos. Esto puede incluir ajíes, salsas de frutas tropicales, y adobos tradicionales como el chimichurri ecuatoriano y el achiote.",
    price: "$10",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "Artefactos y Réplicas en Miniatura",
    description:
      "Réplicas en miniatura de artefactos y piezas históricas encontradas en museos ecuatorianos, como la cerámica Valdivia, máscaras precolombinas, y utensilios incas. Estas réplicas pueden ser coleccionables y venir con información histórica detallada sobre cada pieza.",
    price: "A PARTIR DE $20",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "Mi Biblioteca Virtual Ecuatoriana",
    description:
      "Una plataforma digital que funciona como una biblioteca virtual personalizada. Los usuarios pueden crear su propio perfil y seleccionar los géneros literarios ecuatorianos que más les interesen. La plataforma les recomendará libros, autores y podcasts basados en sus preferencias.",
    price: "$5",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    title: "Tesoros Literarios de Ecuador",
    description:
      "Una tienda online especializada en libros raros, descatalogados y ediciones de colección de autores ecuatorianos. Incluye un catálogo digital interactivo y certificados de autenticidad.",
    price: "$40",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    title: "La Biblioteca Viajera",
    description:
      "Una suscripción mensual que envía a los suscriptores una caja sorpresa con un libro nuevo de un autor ecuatoriano, acompañado de objetos relacionados con el libro o con la cultura ecuatoriana.",
    price: "$30",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    title: "Adopta una Ruina",
    description:
      "Los usuarios 'adoptan' simbólicamente una ruina específica de un centro arqueológico ecuatoriano, realizando donaciones para su conservación y restauración. Ofrece experiencias exclusivas como visitas guiadas virtuales y talleres de arqueología online.",
    price: "$20",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Añadir más si es necesario
];

const Patrimonio = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Categoría: Patrimonio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patrimonioItems.map((item) => (
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
      {/* Card */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-semibold text-center">{item.title}</h2>
          <p className="text-gray-600 mt-2 text-justify">{item.description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
        <span className="text-2xl font-bold w-2/3">{item.price}</span>
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
          
          <button className="bg-blue-600 text-white px-4 py-2  rounded-lg hover:bg-blue-700">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Patrimonio;
