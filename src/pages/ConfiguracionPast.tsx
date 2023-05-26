import React from "react";
import "./Configuracion.css";

function configuracion() {
  return (
    // <main className="content">
    <div
      className="header"
      style={{ backgroundColor: "rgb(31, 30, 119)", height: "50px" }}
    >
      <br />
      <br />
      <div className="container p-4">
        <div className="container-fluid p-0">
          <div className="mb-3">
            <h1
              className="h3 d-inline align-middle"
              style={{ fontSize: "14px" }}
            >
              Configuracion
            </h1>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 mb-3">
              <div className="card">
                <div className="card-header" style={{ background: "#242a30" }}>
                  <h5 className="card-title mb-0 font-weight-bold text-white">
                    Registro de Configuracion
                  </h5>
                </div>
                <div className="card-body pb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese nombre"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div className="card-body pb-1">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Ingrese email"
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-original-title=""
                    title=""
                    style={{ fontSize: "13px" }}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="card" style={{ height: "207px" }}>
                <div
                  className="card-header"
                  style={{ background: "rgb(36, 42, 48)" }}
                >
                  <h5 className="card-title mb-0 font-weight-bold text-white">
                    Registro correo
                  </h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="text-config">
                        <tr>
                          <th className="text-center">#</th>
                          <th>Nombre</th>
                          <th>Correo</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="text-body-config">
                        <tr>
                          <td className="text-center">1</td>
                          <td>Jose Vasquez Saenz</td>
                          <td>jvasquez@altamarfoods.com</td>
                          <td className="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              className="btn btn-primary"
                              data-original-title=""
                              title=""
                              style={{ fontSize: "13px" }}
                            >
                              {/* <i class="material-icons">Eliminar</i> */}
                              Eliminar
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">2</td>
                          <td>John Lenon</td>
                          <td>jlenon@gmail.com</td>
                          <td className="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              className="btn btn-primary"
                              data-original-title=""
                              title=""
                              style={{ fontSize: "13px" }}
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3" style={{ background: "#242a30" }}>
            <h6 className="m-0 font-weight-bold text-white">
              Configurar dispositivos registrados
            </h6>
          </div>
          <div className="card shadow mb-4">
            <table className="table table-bordered table-sm m-0">
              <thead className="text-config">
                <tr>
                  <th></th>
                  <th>Nombre / ID</th>
                  <th>Area</th>
                  <th>Temperatura °C</th>
                  <th>Humedad %</th>
                  <th>Status</th>
                  <th>Batería</th>
                </tr>
              </thead>
              <tbody className="text-body-config">
                <tr>
                  <td>
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <span className="custom-control-indicator"></span>
                    </label>
                  </td>

                  <td>S1-MP1 49:21:07:26:b3:12</td>
                  <td>CAMARA 1 MP</td>
                  <td>7</td>
                  <td>95</td>
                  <td>Activo</td>
                  <td>Activo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer p-0">
            <nav aria-label="...">
              <ul className="pagination justify-content-end mt-3 mr-3">
                <li className="page-item disabled">
                  <span className="page-link" style={{ fontSize: "12px" }}>
                    Previous
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" style={{ fontSize: "12px" }}>
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <span className="page-link" style={{ fontSize: "12px" }}>
                    2<span className="sr-only"></span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" style={{ fontSize: "12px" }}>
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" style={{ fontSize: "12px" }}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3" style={{ background: "#242a30" }}>
            <h6 className="m-0 font-weight-bold text-white">
              Configurar areas registradas
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead className="text-config">
                  <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Temperatura °C</th>
                    <th>Humedad %</th>
                    <th>Status</th>
                    <th>Estado de Conexión del Gateway</th>
                  </tr>
                </thead>
                <tfoot className="text-body-config">
                  <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Temperatura °C</th>
                    <th>Humedad %</th>
                    <th>Status</th>
                    <th>Estado de Conexión del Gateway</th>
                  </tr>
                </tfoot>
                <tbody className="text-body-config">
                  <tr>
                    <td>CAMARA 1 MP</td>
                    <td>MATERIA PRIMA 1</td>
                    <td>5.00</td>
                    <td>93.00</td>
                    <td>Activo</td>
                    <td>Activo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    //</main>
  );
}

export default configuracion;
