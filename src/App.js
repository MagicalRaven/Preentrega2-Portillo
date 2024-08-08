import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './pages/Home';
import Cart from './components/Cart'; // Asegúrate de importar el componente del carrito
import { CartProvider } from './context/CartContext';
import './styles.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
