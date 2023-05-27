import React from "react";
import AlertasHistorial from "../components/alertas/AlertasHistorial";
import AlertasPendientes from "../components/alertas/AlertasPendientes";

function Alertas() {
  return (
    <div className="container my-5">
      <div>
        <AlertasPendientes />
      </div>
      <div className="mt-4">
        <AlertasHistorial />
      </div>
    </div>
  );
}

export default Alertas;
