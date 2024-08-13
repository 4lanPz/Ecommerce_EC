import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Carrito de Compras
      </h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">El carrito está vacío</p>
      ) : (
        <div className="lg:px-96">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4 ">
            {cart.map((item ,index) => (
              <div
                key={item.id}
                className="p-4 pb-0"
              >
                <p className="font-bold">Item {index+1} {item.category} </p>
                <div className="grid grid-cols-10 gap-4">
                <h2 className="font-semibold col-span-8"> {item.title}</h2>
                <p className="font-semibold col-span-2">
                  Precio: ${item.price.toFixed(2)}
                </p>
                </div>
                
                <p className="text-gray-600">Cantidad: {item.quantity}</p>
                
                <p className="text-gray-600">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold">Total General</h2>
            <p className="text-gray-600 text-xl font-bold">
              ${total.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
