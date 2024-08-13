import React, { useState } from "react";
import { Link } from "react-router-dom";

const mediosItems = {
  Cine: [
    {
      id: 1,
      title: "Cine Dinámico",
      subtitle: "Tu elección, tu historia",
      description:
        "Sé parte del proceso creativo cinematográfico en tiempo real. ¡Haz realidad tus ideas y sueños cinematográficos! En este formato único, los espectadores se convierten en co-creadores, participando en cada etapa del proceso cinematográfico. Este es tu momento para brillar y dejar tu huella en el mundo del cine, creando una obra colectiva que refleja la creatividad de todos. ¡Únete a nosotros y construye la magia del cine desde cero!",
      price: "$25",
      imageUrl: "/images/cine_dinamico.jpg",
    },
    {
      id: 2,
      title: "Cine Despierta tus Sentidos",
      subtitle: "Proyecciones Temáticas",
      description:
        "Proyecciones temáticas basadas en festividades ecuatorianas como el Inti Raymi, la Fiesta de la Mama Negra o el Carnaval de Ambato, acompañada de elementos auténticos de la festividad, como música en vivo; además, cada proyección viene acompañada de delicias gastronómicas típicas que cobran vida en la pantalla, ofreciéndote un festín de sabores que hacen honor a las tradiciones que celebramos. ¡Ven y experimenta el cine de una manera completamente nueva, donde cada función es una fiesta para los ojos y el paladar!",
      price: "$20",
      imageUrl: "/images/cine_despierta.jpg",
    },
    {
      id: 3,
      title: "Cine Temático",
      subtitle: "Revive la Magia del Cine Clásico",
      description:
        "Embárcate en un emocionante recorrido por las épocas doradas del cine al revivir la magia de las películas clásicas en un ambiente lleno de nostalgia, donde cada proyección es una cápsula del tiempo que te transporta a momentos inolvidables. Sumérgete en una experiencia única con decoraciones retro y música evocadora que te harán sentir como si estuvieras de vuelta en esos días especiales. Comparte recuerdos y celebra la riqueza cultural del pasado mientras disfrutas de un cine que rinde homenaje a lo mejor de ayer. ¡Ven y revive la historia con nosotros en una noche de recuerdos que te hará sonreír y emocionarte de nuevo!",
      price: "$15",
      imageUrl: "/images/cine_tematico.jpg",
    },
  ],
  Transmisión: [
    {
      id: 4,
      title: "Raíces Vivas",
      subtitle: "Canal en YouTube",
      description:
        "Sumérgete en Canal Raíces Vivas, donde la cultura cobra vida en tiempo real desde el epicentro de nuestras comunidades. Este canal te conecta directamente con la esencia de nuestras celebraciones y tradiciones, trayendo el vibrante pulso de la vida local al unir a grupos culturales de todo el país.",
      price: "Membresía mensual de $5",
      imageUrl: "/images/raices_vivas.jpg",
    },
    {
      id: 5,
      title: "Cultura en Acción",
      subtitle: "Explora y Domina Tradiciones Globales",
      description:
        "Es tu portal para explorar y dominar el fascinante mundo de las tradiciones, el arte y las costumbres globales. Descubre el arte de la danza, la música, la gastronomía y las artes tradicionales de manera dinámica y envolvente con Tutoriales Inspiradores y Webinars con Expertos.",
      price: "Membresía mensual de $5",
      imageUrl: "/images/cultura_accion.jpg",
    },
    {
      id: 6,
      title: "TV de Cultura Creativa: Concursos de Innovación Cultural",
      subtitle: "Cultura al Límite",
      description:
        "Bienvenido a Cultura al Límite, el epicentro de la innovación cultural donde la creatividad se encuentra con la competencia. Aquí, artistas, músicos y visionarios de todas partes compiten en desafíos únicos para redefinir las fronteras de la expresión cultural. Los espectadores pueden votar y proporcionar retroalimentación.",
      price: "Membresía mensual de $5",
      imageUrl: "/images/cultura_creativa.jpg",
    },
  ],
  Spotify: [
    {
      id: 7,
      title: "Ecos de Identidad Sonora",
      subtitle: "Conexión Cultural",
      description:
        "Sumérgete en Ecos de Identidad Sonora, el programa que te conecta con las voces más influyentes del mundo cultural. Aquí, cada entrevista es un viaje revelador, donde líderes culturales, artistas y pioneros comparten sus historias apasionantes y perspectivas únicas. Descubre los secretos detrás de sus creaciones, sus inspiraciones y el impacto de sus tradiciones en la escena global.",
      price: "Membresía mensual de $5",
      imageUrl: "/images/ecos_identidad_sonora.jpg",
    },
    {
      id: 8,
      title: "Ecos de Identidad Podcast",
      subtitle: "Explora y Debate Diversidad Cultural",
      description:
        "En Ecos de Identidad Podcast, nos reunimos para explorar, debatir y celebrar la diversidad cultural en un entorno interactivo y vibrante. Únete a nuestras discusiones en vivo y participa en encuestas que exploran temas culturales fascinantes. Comparte tus propias experiencias y puntos de vista con una comunidad global apasionada por la cultura.",
      price: "Membresía mensual de $5",
      imageUrl: "/images/ecos_identidad_podcast.jpg",
    },
  ],
  Editorial: [
    {
      id: 9,
      title: "Ecos Clubtural",
      subtitle: "Club de Lectura Interactivo",
      description:
        "Únete a nuestro club de lectura interactivo, donde exploramos y discutimos libros que destacan la riqueza cultural de diferentes regiones. Participa en debates y eventos en línea para compartir tus impresiones y conectar con otros amantes de la literatura.",
      price: "Membresía mensual de $5",
      imageUrl: "/images/ecos_clubtural.jpg",
    },
  ],
};

const Medios = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Categoría: Medios</h1>
      {Object.keys(mediosItems).map((category) => (
        <Section
          key={category}
          category={category}
          items={mediosItems[category]}
        />
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

export default Medios;
