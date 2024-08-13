import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item, quantity) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (itemIndex > -1) {
        // Item ya existe en el carrito
        const newCart = [...prevCart];
        newCart[itemIndex].quantity += quantity;
        return newCart;
      } else {
        // Nuevo item
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
export const useCart = () => useContext(CartContext);
