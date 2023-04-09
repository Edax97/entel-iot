import React from "react";

function Reportes() {
  return (
    <div className="header" style={{backgroundColor: "rgb(31, 30, 119)", height:"50px"}}>
      <br/>
      <br/>
      <div className="container p-4">
        {/* <div className="alert alert-primary" role="alert">
          Reporte
        </div> */}
        <div className="card shadow mb-4">        
          <div className="card-header py-3" style={{background: "#242a30"}}>              
            <h6 className="m-0 font-weight-bold text-white">Reporte</h6>
          </div>
          <div className="card-body">
            <form id="formFecha">
              <table>
                <tr>
                  <td style={{paddingLeft: "10px", paddingRight: "10px"}}>              
                    <div className="input-group mb-0">
                      <label className="input-group-text" for="inputGroupSelect01" style={{fontSize: "12px"}}>
                        Áreas
                      </label>
                      <select className="form-select" id="inputGroupSelect01" style={{fontSize: "12px"}}>
                        <option selected>Seleccione...</option>
                        <option value="1">CAMARA 1 MP</option>
                        <option value="2">CAMARA 3 MP</option>
                        <option value="3">CAMARA 4 MP</option>
                        <option value="3">CAMARA 5 MP</option>
                        <option value="3">CAMARA 6 MP</option>
                        <option value="3">CAMARA 1 PT</option>
                        <option value="3">CAMARA 2 PT</option>
                        <option value="3">CAMARA 3 PT</option>
                      </select>
                    </div>
                  </td>            

                  <td style={{paddingLeft: "10px", paddingRight: "10px"}}>
                    <div className="input-group mb-0">
                      <label className="input-group-text" for="inputGroupSelect01" style={{fontSize: "12px"}}>
                        Dispositivo
                      </label>
                      <select className="form-select" id="inputGroupSelect01" style={{fontSize: "12px"}}>
                        <option selected>Seleccione...</option>
                        <option value="CAMARA 1 MP">Promedio CAMARA 1 MP</option>
                        <option value="CAMARA 3 MP">Promedio CAMARA 3 MP</option>
                        <option value="CAMARA 4 MP">Promedio CAMARA 4 MP</option>
                        <option value="CAMARA 5 MP">Promedio CAMARA 5 MP</option>
                        <option value="CAMARA 6 MP">Promedio CAMARA 6 MP</option>
                        <option value="CAMARA 1 PT">Promedio CAMARA 1 PT</option>
                        <option value="CAMARA 2 PT">Promedio CAMARA 2 PT</option>
                        <option value="CAMARA 3 PT">Promedio CAMARA 3 PT</option>

                        <option value="S1-MP1">S1-MP1</option>
                        <option value="S2-MP1">S2-MP1</option>
                        <option value="S3-MP1">S3-MP1</option>
                        <option value="S4-MP1">S4-MP1</option>
                        <option value="S5-MP1">S5-MP1</option>
                        <option value="S6-MP1">S6-MP1</option>
                        <option value="S1-MP3">S1-MP3</option>
                        <option value="S2-MP3">S2-MP3</option>
                        <option value="S3-MP3">S3-MP3</option>
                        <option value="S4-MP3">S4-MP3</option>
                        <option value="S5-MP3">S5-MP3</option>
                        <option value="S6-MP3">S6-MP3</option>
                        <option value="S1-MP3">S1-MP3</option>
                        <option value="S2-MP3">S2-MP3</option>
                        <option value="S3-MP3">S3-MP3</option>
                        <option value="S4-MP3">S4-MP3</option>
                        <option value="S5-MP3">S5-MP3</option>
                        <option value="S6-MP3">S6-MP3</option>
                        
                        <option value="S1-MP4">S1-MP4</option>
                        <option value="S2-MP4">S2-MP4</option>
                        <option value="S3-MP4">S3-MP4</option>
                        <option value="S4-MP4">S4-MP4</option>
                        <option value="S5-MP4">S5-MP4</option>
                        <option value="S6-MP4">S6-MP4</option>

                        <option value="S1-MP5">S1-MP5</option>
                        <option value="S2-MP5">S2-MP5</option>
                        <option value="S3-MP5">S3-MP5</option>
                        <option value="S4-MP5">S4-MP5</option>
                        <option value="S5-MP5">S5-MP5</option>
                        <option value="S6-MP5">S6-MP5</option>

                        <option value="S1-MP6">S1-MP6</option>
                        <option value="S2-MP6">S2-MP6</option>
                        <option value="S3-MP6">S3-MP6</option>
                        <option value="S4-MP6">S4-MP6</option>
                        <option value="S5-MP6">S5-MP6</option>
                        <option value="S6-MP6">S6-MP6</option>

                        <option value="S1-PT1">S1-PT1</option>
                        <option value="S2-PT1">S2-PT1</option>
                        <option value="S3-PT1">S3-PT1</option>
                        <option value="S4-PT1">S4-PT1</option>
                        <option value="S5-PT1">S5-PT1</option>
                        <option value="S6-PT1">S6-PT1</option>
                        <option value="S7-PT1">S7-PT1</option>
                        <option value="S8-PT1">S8-PT1</option>
                        <option value="S9-PT1">S9-PT1</option>
                        <option value="S10-PT1">S10-PT1</option>

                        <option value="S1-PT2">S1-PT2</option>
                        <option value="S2-PT2">S2-PT2</option>
                        <option value="S3-PT2">S3-PT2</option>
                        <option value="S4-PT2">S4-PT2</option>
                        <option value="S5-PT2">S5-PT2</option>
                        <option value="S6-PT2">S6-PT2</option>
                        <option value="S7-PT2">S7-PT2</option>
                        <option value="S8-PT2">S8-PT2</option>
                        <option value="S9-PT2">S9-PT2</option>
                        <option value="S10-PT2">S10-PT2</option>

                        <option value="S1-PT3">S1-PT3</option>
                        <option value="S2-PT3">S2-PT3</option>
                        <option value="S3-PT3">S3-PT3</option>
                        <option value="S4-PT3">S4-PT3</option>
                        <option value="S5-PT3">S5-PT3</option>
                        <option value="S6-PT3">S6-PT3</option>
                        <option value="S7-PT3">S7-PT3</option>
                        <option value="S8-PT3">S8-PT3</option>
                        <option value="S9-PT3">S9-PT3</option>
                        <option value="S10-PT3">S10-PT3</option>
                      </select>
                    </div>
                  </td>

                  <td style={{paddingLeft: "5px", paddingRight: "5px"}}>
                    <div className="input-group mb-0">                               
                      <label className="input-group-text" for="inputGroupSelect01" style={{fontSize: "12px"}}>
                        Desde
                      </label>
                      <input
                        type="date" readonly id="buscar_inicio" placeholder="Fecha Inicio" className="form-control" style={{fontSize: "12px"}} />
                    </div>
                    
                  </td>
                  <td style={{paddingLeft: "5px", paddingRight: "5px"}}>
                    <div className="input-group mb-0">                
                      <label className="input-group-text" for="inputGroupSelect01" style={{fontSize: "12px"}}>
                        Hasta
                      </label>
                      <input
                      type="date" readonly id="buscar_fin" placeholder="Fecha fin" className="form-control" style={{fontSize: "12px"}} />
                    </div>              
                  </td>
                  <td>
                    <input
                      type="button" id="btn_search" value="Buscar" className="btn btn-primary btn-sm" />
                  </td>            
                </tr>
              </table>
            </form>      
          </div>
        </div>
        <hr />
        
        <table
          id="Tabla_personal"
          className="table table-striped"
          style={{ width: "100%" }}
        >
          <thead style={{fontSize: "12px"}}>
            <tr>
              <th>Sensor</th>
              <th>S1-MP1</th>
              <th>S6-MP1</th>
              <th>S4-MP1</th>
              <th>S2-MP1</th>
              <th>S5-MP1</th>
              <th>S3-MP1</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Reportes;
