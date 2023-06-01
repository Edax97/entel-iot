import React, { useEffect } from "react";
import ConfigBarContainer from "../components/reservorios/config-bar/ConfigBarContainer";
import NivelGraficaContainer from "../components/reservorios/nivel-grafica/NivelGraficaContainer";
import NivelReservoriosContainer from "../components/reservorios/nivel-reservorios/NivelReservoriosContainer";
import ResumeContainer from "../components/reservorios/resumen/ResumeContainer";
import { useAppStore } from "../store/store";
import { moverFecha } from "../utilities/date-utils";

export default function Reservorios() {
  const getReservorios = useAppStore((state) => state.getReservorios);
  const getResGraficas = useAppStore((state) => state.getResGraficas);
  useEffect(() => {
    getReservorios();
    getResGraficas([moverFecha(new Date(), 0), moverFecha(new Date(), 0)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container my-4">
      <div className="">
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
      <div className="mt-4">
        <NivelGraficaContainer />
      </div>
    </div>
  );
}
