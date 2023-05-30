import React from "react";
import AreaGraficaProvider from "../store/AreaGraficaProvider";

function Graficas() {
  return (
    <AreaGraficaProvider>
      <div className="container pt-4">
        <div>SELECT CONTAINER</div>
        <div className="mt-4">GRAFICA CARD</div>
      </div>
    </AreaGraficaProvider>
  );
}

export default Graficas;
