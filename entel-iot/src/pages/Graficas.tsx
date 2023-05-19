import React from 'react';
import Chart from "../components/Chart";

function Graficas() {
  return (
    <div className="header" style={{backgroundColor: "rgb(31, 30, 119)", height:"50px"}}>
      <br/>
      <br/>
      <div className="container-fluid p-4">
            <div className="row">
              <div className="col-12 col-lg-6 mb-3">
                <div className="card" style={{width: "323px"}}>
                  <div className="card-header" style={{background: "rgba(0,172,172,1)", height: "100px"}}>
                    <h5 className="card-title mb-3 font-weight-bold text-white">AREA</h5>
                    <select className="form-select" id="inputGroupSelect01" style={{fontSize: "12px", width: "280px"}}>
                      <option selected>Seleccione...</option>
                      <option value="cam1mp">CAMARA 1 MP</option>
                      <option value="cam3mp">CAMARA 3 MP</option>
                      <option value="cam4mp">CAMARA 4 MP</option>
                      <option value="cam5mp">CAMARA 5 MP</option>
                      <option value="cam6mp">CAMARA 6 MP</option>
                      <option value="cam1pt">CAMARA 1 PT</option>
                      <option value="cam2pt">CAMARA 2 PT</option>
                      <option value="cam3pt">CAMARA 3 PT</option>
                    </select>
                  </div>                
                </div>              							
              </div>

              <div className="col-12 col-lg-6 mb-3">
                <div className="card" style={{width: "323px"}}>
                  <div className="card-header" style={{background: "rgba(81,136,218,1)", height: "100px"}}>
                    <h5 className="card-title mb-3 font-weight-bold text-white">PERIODO</h5>
                    <select className="form-select" id="inputGroupSelect01" style={{fontSize: "12px", width: "280px"}}>
                      <option selected>Seleccione...</option>
                      <option value="1h">1 Hora</option>
                      <option value="3h">3 Horas</option>
                      <option value="6h">6 Horas</option>
                      <option value="12">12 Horas</option>
                      <option value="24h">24 Horas</option>
                      <option value="sactual">Semana Actual</option>
                      <option value="umes">Ultimo Mes</option>
                    </select>
                  </div>                
                </div>              							
              </div>

            </div>

            <div className="card shadow mb-4">
              <div className="card-header py-3" style={{background: "#242a30"}}>              
                <h6 className="m-0 font-weight-bold text-white">Grafica</h6>
              </div>
              <div className="card-block p-0">
                <Chart />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Graficas