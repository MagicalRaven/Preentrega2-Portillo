import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/Courses';
import { useCart } from '../context/CartContext'; 
import '../styles.css'; 

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null); // Estado para notificación
  const { cart, addToCart } = useCart(); 

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        try {
          const course = courses.find(course => course.id === parseInt(id));
          if (course) {
            setItem(course);
          } else {
            setError('Curso no encontrado');
          }
        } catch (err) {
          setError('Error al cargar el curso');
        } finally {
          setLoading(false);
        }
      }, 1000); 
    };

    fetchData();
  }, [id]);

  const handleAddToCart = (course) => {
    if (cart.some(item => item.id === course.id)) {
      setNotification('Este curso ya está en el carrito.');
    } else {
      addToCart(course);
      setNotification('Curso agregado al carrito.');
    }
    setTimeout(() => setNotification(null), 3000); // Ocultar notificación después de 3 segundos
  };

  if (loading) return <p>Cargando curso...</p>;
  if (error) return <p>{error}</p>;

  if (!item) return <p>Curso no encontrado.</p>;

  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <p>Precio: ${item.price}</p>
      <p>Dificultad: {item.difficulty}</p>
      <p>Detalles del curso...</p>
      <button onClick={() => handleAddToCart(item)}>Agregar al carrito</button>
      {notification && <p className="notification">{notification}</p>} {/* Mostrar notificación */}
    </div>
  );
}

export default ItemDetailContainer;
