import React from "react";
import { useAreaGraficaContext } from "../../store/AreaGraficaProvider";

export default function SelectContainer() {
  const { timeRange, setTimeRange, currentArea, setCurrentArea } =
    useAreaGraficaContext();

  return <div>SelectContainer</div>;
}
