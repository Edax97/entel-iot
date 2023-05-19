import React, { useEffect } from "react";
import ConfigBarContainer from "../components/reservorios/config-bar/ConfigBarContainer";
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
      <div className="mt-4 d-flex gap-3">
        <div className="">RESUMEN WIDGET</div>
        <div className="">RESERVORIOS WIDGET</div>
      </div>
      <div className="mt-4">EVOLUCION WIDGET</div>
    </div>
  );
}
