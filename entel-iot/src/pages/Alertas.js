import React from 'react'

function Alertas() {
  return (

    // <main className="content">
    <div className="header" style={{backgroundColor: "rgb(31, 30, 119)", height:"50px"}}>
      <br/>
      <br/>
      <div className="container p-4">  
          <div className="card shadow mb-4">
              <div className="card-header py-3" style={{background: "#242a30"}}>              
                <h6 className="m-0 font-weight-bold text-white">Alertas activas</h6>
              </div>
              <div className="card-block p-0">
                  <table className="table table-bordered table-sm m-0">
                      <thead className="text-config">
                          <tr>
                              <th></th>
                              <th>Area</th>
                              <th>Dispositivo</th>
                              <th>Fecha / Hora</th>
                              <th>Temp / Humed</th>
                              <th>Motivo</th>
                              <th>Ultimo cambio</th>
                              <th>Acción</th>
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
                              
                              <td>CAMARA 1 MP</td>
                              <td>S1-MP1</td>
                              <td>2023-02-17 / 01:11:24</td>
                              <td>12.84 °C    /   90 %</td>
                              <td>Baja humedad</td>
                              <td>2023-02-17 07:11:37</td>
                              <td>ACTIVO</td>
                          </tr>

                          <tr>                          
                            <td>                            
                              <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                              </label>
                            </td>

                            <td>CAMARA 1 MP</td>
                            <td>S2-MP1</td>
                            <td>2023-02-16 / 12:00:23</td>
                            <td>7.03 °C    /   92.85 %</td>
                            <td>Alta temperatura</td>
                            <td>2023-02-16 18:00:33</td>
                            <td>ACTIVO</td>
                          </tr>                    
                          
                      </tbody>
                  </table>
              </div>
              <div className="card-footer p-0">
                  <nav aria-label="...">
                      <ul className="pagination justify-content-end mt-3 mr-3">
                          <li className="page-item disabled">
                              <span className="page-link" style={{fontSize: "12px"}}>Previous</span>
                          </li>
                          <li className="page-item"><a className="page-link" style={{fontSize: "12px"}}>1</a></li>
                          <li className="page-item active">
                              <span className="page-link" style={{fontSize: "12px"}}>2<span className="sr-only"></span>
                              </span>
                          </li>
                          <li className="page-item"><a className="page-link" style={{fontSize: "12px"}}>3</a></li>
                          <li className="page-item">
                              <a className="page-link" style={{fontSize: "12px"}}>Next</a>
                          </li>
                      </ul>
                  </nav>
              </div>
          </div>               

          <div className="card shadow mb-4">
            <div className="card-header py-3" style={{background: "#242a30"}}>
              <h6 className="m-0 font-weight-bold text-white">Alertas registradas</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead className="text-config">
                    <tr>
                      <th>Area</th>
                      <th>Dispositivo</th>
                      <th>Fecha / Hora</th>
                      <th>Temp / Humed</th>
                      <th>Motivo</th>
                      <th>Ultimo cambio</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tfoot className="text-body-config">
                    <tr>                    
                      <th>Area</th>
                      <th>Dispositivo</th>
                      <th>Fecha / Hora</th>
                      <th>Temp / Humed</th>
                      <th>Motivo</th>
                      <th>Ultimo cambio</th>
                      <th>Acción</th>
                    </tr>
                  </tfoot>
                  <tbody className="text-body-config">
                    <tr>
                      <td>CAMARA 4 MP</td>
                      <td>S3-MP4</td>
                      <td>2023-02-25 / 06:19:45</td>
                      <td>3.39 °C    /   91.87 %</td>
                      <td>Alta temperatura</td>
                      <td>2023-02-25 12:19:56</td>
                      <td>SOLUCIONADO</td>
                    </tr>
                    <tr>
                      <td>CAMARA 4 MP</td>
                      <td>S4-MP4</td>
                      <td>2023-02-25 / 06:15:49</td>
                      <td>3.80 °C    /   91.08 %</td>
                      <td>Alta temperatura</td>
                      <td>2023-02-25 12:15:43</td>
                      <td>SOLUCIONADO</td>
                    </tr>
                    <tr>
                      <td>CAMARA 4 MP</td>
                      <td>S4-MP4</td>
                      <td>2023-02-25 / 05:39:51</td>
                      <td>7.32 °C    /   91.68 %</td>
                      <td>Alta temperatura</td>
                      <td>2023-02-25 11:39:48</td>
                      <td>SOLUCIONADO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>  
			//</main>    
  )
}

export default Alertas