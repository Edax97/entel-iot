import React, { useEffect } from "react";
import ConfigBarContainer from "../components/reservorios/config-bar/ConfigBarContainer";
import NivelReservoriosContainer from "../components/reservorios/nivel-reservorios/NivelReservoriosContainer";
import ResumeContainer from "../components/reservorios/resumen/ResumeContainer";
import { useAppStore } from "../store/store";

export default function Reservorios() {
  const getReservorios = useAppStore((state) => state.getReservorios);
  useEffect(() => {
    getReservorios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <ConfigBarContainer />
      </div>
      <div className="row mt-4 gy-4">
        <div className="col-xl-3 col-8">
          <ResumeContainer />
        </div>
        <div className="col-xl-9 col-12">
          <NivelReservoriosContainer />
        </div>
      </div>
      <div className="mt-4">EVOLUCION WIDGET</div>
    </div>
  );
}
