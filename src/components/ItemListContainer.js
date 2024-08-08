import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import courses from '../data/Courses';
import '../styles.css';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        try {
          const filteredCourses = categoryId
            ? courses.filter(course => course.category === categoryId)
            : courses;
          setItems(filteredCourses);
        } catch (err) {
          setError('Error al cargar los cursos');
        } finally {
          setLoading(false);
        }
      }, 1000);
    };

    fetchData();
  }, [categoryId]);

  if (loading) return <p>Cargando cursos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      {items.length === 0 ? (
        <p>No hay cursos disponibles en esta categoría.</p>
      ) : (
        <div className="item-list">
          {items.map(item => (
            <div className="item" key={item.id}>
              <Link to={`/item/${item.id}`} className="item-link">
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <p>Dificultad: {item.difficulty}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
