import React from "react";
import AlertasPendientesContainer from "../components/alertas/AlertasPendientesContainer";

function Alertas() {
  return (
    <div className="container my-5">
      <div>
        <AlertasPendientesContainer />
      </div>
      <div className="mt-4">ALERTAS HISTORIAL</div>
    </div>
  );
}

export default Alertas;
