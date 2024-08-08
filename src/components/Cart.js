import React from 'react';
import { useCart } from '../context/CartContext'; // Importa el hook del contexto

function Cart() {
  const { cart, removeFromCart } = useCart(); // Usa el hook para obtener el carrito y la función para eliminar del carrito

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button> {/* Botón para eliminar del carrito */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
