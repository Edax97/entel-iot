import React, { useEffect } from "react";
import ConfigBarContainer from "../components/reservorios/config-bar/ConfigBarContainer";
import ResumeContainer from "../components/reservorios/resumen/ResumeContainer";
import { useEntelStore } from "../store/store";

export default function Reservorios() {
  const getReservorios = useEntelStore((state) => state.getReservorios);
  useEffect(() => {
    getReservorios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <ConfigBarContainer />
      </div>
      <div className="row mt-4">
        <div className="col-xl-3 col-9 p-2">
          <ResumeContainer />
        </div>
        <div className="col-xl-9 col-12 p-2">
          <div className="card shadow"></div>
        </div>
      </div>
      <div className="mt-4">EVOLUCION WIDGET</div>
    </div>
  );
}
