import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineOrderedList,
  AiOutlineDown,
} from "react-icons/ai";

const Dashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const menuItems = [
    { text: "Inicio", icon: <AiOutlineHome size={24} />, to: "/" },
    { text: "Buscar", icon: <AiOutlineSearch size={24} />, to: "/search" },
    {
      text: "Mis Pedidos",
      icon: <AiOutlineOrderedList size={24} />,
      to: "/orders",
    },
    { text: "Perfil", icon: <AiOutlineUser size={24} />, to: "/profile" },
  ];

  const categories = [
    { text: "Patrimonio", to: "patrimonio" },
    { text: "Artes", to: "artes" },
    { text: "Medios", to: "medios" },
    { text: "Creaciones Funcionales", to: "creaciones-funcionales" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra navegación */}
      <nav className="bg-blue-600 text-white p-4 flex items-center justify-between sticky top-0 z-10">
        {/* Categorías */}
        <div className="relative flex items-center space-x-7">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center text-white hover:text-gray-300"
          >
            <AiOutlineDown size={24} />
            <span className="ml-2">Categorías</span>
          </button>
          {menuOpen && (
            <div className="absolute top-full left-0 bg-blue-600 text-white mt-2 p-2 rounded-md shadow-lg w-48">
              <ul>
                {categories.map((category) => (
                  <li key={category.to} className="py-1">
                    <Link
                      to={category.to}
                      className="block px-4 py-2 hover:bg-blue-700 rounded"
                      onClick={() => setMenuOpen(false)}
                    >
                      {category.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Botón inicio */}
        <Link
          to="/"
          className="flex items-center text-white hover:text-gray-300 text-xl font-bold"
        >
          <AiOutlineHome size={24} />
        </Link>

        {/* Carrito */}
        <button
          onClick={() => navigate("/cart")}
          className="flex items-center text-white hover:text-gray-300"
        >
          <AiOutlineShoppingCart size={24} />
          <span className="ml-2">Carrito</span>
        </button>
      </nav>

      {/* Contenido que cambia */}
      <main className="flex-1 overflow-y-auto bg-gray-100 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
