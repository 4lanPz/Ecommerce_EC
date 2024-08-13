import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./paginas/LandingPage";
import { Desconocido } from "./paginas/Desconocido";
import Dashboard from "./layout/Dashboard";
import HomePage from "./paginas/HomePage";
import Patrimonio from "./paginas/Patrimonio";
import Artes from "./paginas/Artes";
import Medios from "./paginas/Medios";
import Creaciones from "./paginas/Creaciones";
import { CartProvider } from "./context/CartContext";
import CartPage from "./layout/CartPage";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="*" element={<Desconocido />} />
          <Route path="dashboard/*" element={<Dashboard />}>
            <Route index element={<HomePage />} />
            <Route path="patrimonio" element={<Patrimonio />} />
            <Route path="artes" element={<Artes />} />
            <Route path="medios" element={<Medios />} />
            <Route path="creaciones-funcionales" element={<Creaciones />} />
            <Route path="carrito" element={<CartPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
