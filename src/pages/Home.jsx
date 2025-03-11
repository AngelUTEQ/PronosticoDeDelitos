// pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Añade una animación de entrada al cargar la página
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="container-fluid p-0 position-relative text-center" 
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(/background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: 'calc(100vh - 56px)',
        overflow: 'hidden'
      }}
    >
      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="position-absolute w-100 h-100 top-0 start-0 bg-dark opacity-50"></div>
      
      {/* Contenido principal */}
      <div 
        className={`d-flex flex-column justify-content-center align-items-center h-100 position-relative ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
        style={{ 
          transition: 'opacity 1.5s ease-in-out',
          zIndex: 10 
        }}
      >
        <h1 className="display-3 fw-bold text-white mb-4">
          Querétaro seguro, futuro seguro
        </h1>
        <p className="lead fw-normal text-white mb-5 px-3 col-md-8">
          Juntos construimos una ciudad más segura para todos. Descubre cómo puedes 
          contribuir a proteger tu comunidad y crear un entorno de confianza.
        </p>
        <div className="d-flex gap-3">
          <Link to="/servicios" className="btn btn-primary btn-lg px-4 py-2 fw-semibold">
            Comenzar
          </Link>
          <Link to="/informacion" className="btn btn-outline-light btn-lg px-4 py-2">
            Más información
          </Link>
        </div>
        
        {/* Estadísticas o información adicional */}
        <div className="container mt-5">
          <div className="row text-white g-4">
           
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-white">
        <p className="mb-2 small">Desplázate para más</p>
        <i className="bi bi-chevron-down fs-4 animate__animated animate__bounce animate__infinite"></i>
      </div>
    </div>
  );
}

export default Home;