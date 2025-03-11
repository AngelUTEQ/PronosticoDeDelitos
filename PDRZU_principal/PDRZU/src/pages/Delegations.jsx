// pages/Delegations.js
import React, { useState, useEffect } from 'react';

function Delegations() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDelegation, setSelectedDelegation] = useState(null);
  const [incidents, setIncidents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const delegations = [
    { id: 1, name: 'Delegación Querétaro', incidents: 42, trend: 'down' },
    { id: 2, name: 'Epigmenio González', incidents: 37, trend: 'up' },
    { id: 3, name: 'Felipe Carrillo Puerto', incidents: 29, trend: 'stable' },
    { id: 4, name: 'Centro Histórico', incidents: 45, trend: 'down' }
  ];

  const mockIncidents = [
    { id: 1, type: 'Robo', location: 'Av. Constituyentes', time: '13:45', risk: 'high' },
    { id: 2, type: 'Asalto', location: 'Calle Ezequiel Montes', time: '21:30', risk: 'high' },
    { id: 3, type: 'Robo de auto', location: 'Blvd. Bernardo Quintana', time: '18:15', risk: 'medium' },
    { id: 4, type: 'Vandalismo', location: 'Parque Alameda', time: '22:00', risk: 'low' },
    { id: 5, type: 'Robo a casa', location: 'Col. Lomas de San Pedrito', time: '09:20', risk: 'medium' }
  ];

  useEffect(() => {
    if (selectedDelegation) {
      setIsLoading(true);
      // Simulación de carga de datos
      setTimeout(() => {
        setIncidents(mockIncidents);
        setIsLoading(false);
      }, 800);
    }
  }, [selectedDelegation, selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
    if (selectedDelegation) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  };

  const handleDelegationClick = (delegation) => {
    setSelectedDelegation(delegation);
  };

  const getRiskBadge = (risk) => {
    const badges = {
      high: <span className="badge bg-danger">Alto</span>,
      medium: <span className="badge bg-warning text-dark">Medio</span>,
      low: <span className="badge bg-success">Bajo</span>
    };
    return badges[risk] || <span className="badge bg-secondary">Desconocido</span>;
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <i className="bi bi-arrow-up-circle-fill text-danger ms-2"></i>;
    if (trend === 'down') return <i className="bi bi-arrow-down-circle-fill text-success ms-2"></i>;
    return <i className="bi bi-dash-circle-fill text-warning ms-2"></i>;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Delegaciones
              </h5>
            </div>
            <div className="card-body p-0">
              <div className="list-group rounded-0">
                {delegations.map((delegation) => (
                  <button
                    key={delegation.id}
                    className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
                      selectedDelegation?.id === delegation.id ? 'active' : ''
                    }`}
                    onClick={() => handleDelegationClick(delegation)}
                  >
                    <div>
                      <i className="bi bi-building me-2"></i>
                      {delegation.name}
                    </div>
                    <div>
                      <span className={`badge ${selectedDelegation?.id === delegation.id ? 'bg-light text-primary' : 'bg-primary'} rounded-pill`}>
                        {delegation.incidents}
                      </span>
                      {getTrendIcon(delegation.trend)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="bi bi-calendar-event me-2"></i>
                  Selecciona una fecha
                </h5>
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-outline-secondary me-2">
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <span className="fw-bold">
                    {selectedDate.toLocaleDateString('es-MX', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <button className="btn btn-sm btn-outline-secondary ms-2">
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="dateSelect" className="form-label">Fecha específica:</label>
                    <input
                      id="dateSelect"
                      type="date"
                      className="form-control"
                      value={selectedDate.toISOString().split('T')[0]}
                      onChange={handleDateChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Período:</label>
                  <div className="btn-group w-100">
                    <button className="btn btn-outline-primary">Día</button>
                    <button className="btn btn-outline-primary">Semana</button>
                    <button className="btn btn-outline-primary">Mes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {selectedDelegation ? (
            <div className="card shadow-sm">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <i className="bi bi-clipboard-data me-2"></i>
                  Incidentes en {selectedDelegation.name}
                </h5>
              </div>
              <div className="card-body">
                {isLoading ? (
                  <div className="text-center my-4">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className="mt-2">Cargando incidentes...</p>
                  </div>
                ) : incidents.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Tipo</th>
                          <th>Ubicación</th>
                          <th>Hora</th>
                          <th>Riesgo</th>
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {incidents.map((incident) => (
                          <tr key={incident.id}>
                            <td>{incident.type}</td>
                            <td>{incident.location}</td>
                            <td>{incident.time}</td>
                            <td>{getRiskBadge(incident.risk)}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary">
                                <i className="bi bi-info-circle"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center text-muted my-4">
                    <i className="bi bi-clipboard-check fs-1"></i>
                    <p>No hay incidentes registrados para esta fecha.</p>
                  </div>
                )}
              </div>
              <div className="card-footer bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <i className="bi bi-info-circle me-1"></i>
                    Mostrando {incidents.length} incidentes
                  </span>
                  <button className="btn btn-sm btn-primary">
                    <i className="bi bi-download me-1"></i>
                    Exportar datos
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="card shadow-sm">
              <div className="card-body text-center p-5">
                <i className="bi bi-arrow-left-circle text-primary fs-1"></i>
                <h5 className="mt-3">Selecciona una delegación</h5>
                <p className="text-muted">
                  Haz clic en una delegación para ver los incidentes reportados en esa zona.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Delegations;