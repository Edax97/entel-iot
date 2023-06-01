import React from "react";
import SelectAreaContainer from "../components/graficas/select/SelectAreaContainer";
import SelectRangeContainer from "../components/graficas/select/SelectRangeContainer";
import ReporteContainer from "../components/reporte/ReporteContainer";
import AreaGraficaProvider from "../store/AreaGraficaProvider";

function Reportes() {
  return (
    <AreaGraficaProvider>
      <div className="container-fluid py-4 p-lg-5">
        <div className="d-flex gap-4 flex-wrap">
          <SelectAreaContainer />
          <SelectRangeContainer />
        </div>
        <div className="mt-4">
          <ReporteContainer />
        </div>
      </div>
    </AreaGraficaProvider>
  );
}

export default Reportes;
