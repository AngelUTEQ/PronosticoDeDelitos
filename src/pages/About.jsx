// pages/About.js
import React from 'react';

function About() {
  const teamMembers = [
    { 
      name: "Owen Arredondo", 
      role: "Líder de Proyecto",
      description: "Especialista en análisis de datos y seguridad urbana con 7 años de experiencia.",
      image: "./image/owen.jpg" 
    },
    { 
      name: "David Tovar", 
      role: "Científico de Datos",
      description: "Experto en modelos predictivos y análisis estadístico de patrones de criminalidad.",
      image: "/team-member-2.jpg" 
    },
    { 
      name: "Fernanda ", 
      role: "Desarrolladora Full-Stack",
      description: "Ingeniera de software especializada en aplicaciones de geolocalización y seguridad.",
      image: "/team-member-3.jpg" 
    },
    { 
      name: "Angel Isaiz", 
      role: "Experto en Seguridad",
      description: "Consultor con experiencia en prevención del delito y estrategias de seguridad comunitaria.",
      image: "/team-member-4.jpg" 
    },
    { 
      name: "Diego Ivan", 
      role: "Analista de Datos",
      description: "Especialista en visualización de datos y comunicación efectiva de información compleja.",
      image: "/team-member-5.jpg" 
    }
  ];

  return (
    <div className="container mt-5">
      {/* Hero section */}
      <div className="row mb-5">
        <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
          <div className="position-relative">
            <div className="bg-primary position-absolute top-0 end-0 w-75 h-75 rounded" style={{ zIndex: 0, opacity: 0.1 }}></div>
            <img 
              src="./image/logo.jpeg" 
              alt="Equipo de trabajo" 
              className="img-fluid rounded shadow-sm position-relative" 
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
        <div className="col-lg-6 order-lg-1 d-flex flex-column justify-content-center">
          <h1 className="display-5 fw-bold mb-4">Impulsando una Ciudad Segura</h1>
          <p className="lead">
            Somos un equipo multidisciplinario de cinco profesionales uniendo tecnología y seguridad para crear un Querétaro más seguro para todos.
          </p>
          <p>
            Nuestra misión es proporcionar información precisa y oportuna sobre los niveles de seguridad en diferentes zonas de la ciudad, permitiendo a los ciudadanos tomar decisiones informadas.
          </p>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-primary px-4">
              <i className="bi bi-envelope me-2"></i>
              Contáctanos
            </button>
            <button className="btn btn-outline-secondary px-4">
              <i className="bi bi-file-earmark-text me-2"></i>
              Descargar reporte
            </button>
          </div>
        </div>
      </div>

      {/* Process section */}
      <div className="row my-5">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold">Nuestro Proceso</h2>
          <p className="text-muted">Cómo transformamos datos en seguridad</p>
        </div>
        
        <div className="col-12">
          <div className="card border-0 bg-light">
            <div className="card-body p-4">
              <div className="row g-4">
                {[
                  { 
                    icon: "bi-database", 
                    title: "Recopilación de datos", 
                    description: "Analizamos información histórica de incidentes de seguridad en las delegaciones de Querétaro." 
                  },
                  { 
                    icon: "bi-graph-up", 
                    title: "Análisis estadístico", 
                    description: "Aplicamos modelos predictivos para identificar patrones y tendencias en los datos." 
                  },
                  { 
                    icon: "bi-map", 
                    title: "Mapeo de riesgos", 
                    description: "Creamos visualizaciones que muestran niveles de riesgo por zonas y momentos del día." 
                  },
                  { 
                    icon: "bi-shield-check", 
                    title: "Recomendaciones", 
                    description: "Ofrecemos información práctica para ayudar a los ciudadanos a mantenerse seguros." 
                  }
                ].map((step, index) => (
                  <div key={index} className="col-md-6 col-lg-3">
                    <div className="text-center">
                      <div className="d-inline-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm mb-3" style={{ width: "80px", height: "80px" }}>
                        <i className={`bi ${step.icon} fs-1 text-primary`}></i>
                      </div>
                      <h5 className="fw-bold">{step.title}</h5>
                      <p className="mb-0">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="row my-5">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold">Nuestro Equipo</h2>
          <p className="text-muted">Conoce a los profesionales detrás del proyecto</p>
        </div>
      </div>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="col">
            <div className="card h-100 border-0 shadow-sm">
              <div className="text-center mt-4">
                <div className="rounded-circle overflow-hidden mx-auto" style={{ width: "120px", height: "120px" }}>
                  <img src="/api/placeholder/120/120" alt={member.name} className="img-fluid" />
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="card-text">{member.description}</p>
              </div>
              <div className="card-footer bg-white text-center border-top-0 pb-3">
                <div className="d-flex justify-content-center gap-2">
                  <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle">
                    <i className="bi bi-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="row my-5">
        <div className="col-12">
          <div className="card bg-primary text-white">
            <div className="card-body p-5 text-center">
              <h3 className="fw-bold mb-3">¿Quieres colaborar en este proyecto?</h3>
              <p className="mb-4">
                Siempre estamos buscando mejorar nuestros modelos y análisis. Si tienes experiencia en seguridad, 
                ciencia de datos o desarrollo, nos encantaría hablar contigo.
              </p>
              <button className="btn btn-light btn-lg px-4">
                <i className="bi bi-people me-2"></i>
                Únete al equipo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;