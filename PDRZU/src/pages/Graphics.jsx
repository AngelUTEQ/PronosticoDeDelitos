// pages/Graphics.js
import React, { useState, useEffect } from 'react';

function Graphics() {
  const [activeTab, setActiveTab] = useState('barras');
  const [isLoading, setIsLoading] = useState(true);
  
  const delegationData = [
    { name: 'Epigmenio Gonzales', red: 25, yellow: 15, green: 60, total: 145 },
    { name: 'Felipe Carrillo Puerto', red: 20, yellow: 15, green: 65, total: 132 },
    { name: 'Centro Histórico', red: 30, yellow: 10, green: 60, total: 178 }
  ];

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const renderBarCharts = () => (
    <div className="row">
      {delegationData.map((delegation, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-light fw-bold d-flex justify-content-between align-items-center">
              <span>{delegation.name}</span>
              <span className="badge bg-primary rounded-pill">{delegation.total} casos</span>
            </div>
            <div className="card-body">
              <div className="mb-2">
                <div className="d-flex justify-content-between mb-1">
                  <span className="small text-danger">Alto riesgo</span>
                  <span className="small text-danger fw-bold">{delegation.red}%</span>
                </div>
                <div className="progress mb-3" style={{ height: "20px" }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: `${delegation.red}%` }}
                  >
                    {delegation.red}%
                  </div>
                </div>
              </div>
              
              <div className="mb-2">
                <div className="d-flex justify-content-between mb-1">
                  <span className="small text-warning">Riesgo medio</span>
                  <span className="small text-warning fw-bold">{delegation.yellow}%</span>
                </div>
                <div className="progress mb-3" style={{ height: "20px" }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: `${delegation.yellow}%` }}
                  >
                    {delegation.yellow}%
                  </div>
                </div>
              </div>
              
              <div>
                <div className="d-flex justify-content-between mb-1">
                  <span className="small text-success">Bajo riesgo</span>
                  <span className="small text-success fw-bold">{delegation.green}%</span>
                </div>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${delegation.green}%` }}
                  >
                    {delegation.green}%
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white border-top-0">
              <button className="btn btn-sm btn-outline-primary w-100">
                Ver detalles completos
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCombinedChart = () => (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Delegación</th>
                <th>Total casos</th>
                <th>Alto riesgo</th>
                <th>Riesgo medio</th>
                <th>Bajo riesgo</th>
                <th>Comparativa</th>
              </tr>
            </thead>
            <tbody>
              {delegationData.map((delegation, index) => (
                <tr key={index}>
                  <td className="fw-bold">{delegation.name}</td>
                  <td>{delegation.total}</td>
                  <td>
                    <span className="text-danger fw-bold">{delegation.red}%</span>
                  </td>
                  <td>
                    <span className="text-warning fw-bold">{delegation.yellow}%</span>
                  </td>
                  <td>
                    <span className="text-success fw-bold">{delegation.green}%</span>
                  </td>
                  <td style={{ width: "30%" }}>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: `${delegation.red}%` }}
                      ></div>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: `${delegation.yellow}%` }}
                      ></div>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: `${delegation.green}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Análisis por Delegación</h2>
        <div className="btn-group">
          <button
            className={`btn ${activeTab === 'barras' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveTab('barras')}
          >
            <i className="bi bi-bar-chart-fill me-1"></i> Barras
          </button>
          <button
            className={`btn ${activeTab === 'tabla' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveTab('tabla')}
          >
            <i className="bi bi-table me-1"></i> Tabla
          </button>
        </div>
      </div>

      <div className="card mb-4 bg-light">
        <div className="card-body">
          <h5 className="card-title">
            <i className="bi bi-info-circle-fill text-primary me-2"></i>
            Monitoreo de seguridad
          </h5>
          <p className="card-text">
            Estos gráficos muestran la distribución de incidentes por nivel de riesgo en cada delegación.
            Los porcentajes representan la proporción de zonas categorizadas según su nivel de seguridad.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Cargando datos...</p>
        </div>
      ) : (
        activeTab === 'barras' ? renderBarCharts() : renderCombinedChart()
      )}
    </div>
  );
}

export default Graphics;