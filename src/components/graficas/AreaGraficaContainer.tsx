import React, { useEffect, useMemo, useState } from "react";
import {
  AreaDatumT,
  AreaGraficaType,
  useAreaGraficaAPI,
} from "../../api-state/useAreaGraficaAPI";
import { RangeT, useAreaGraficaContext } from "../../store/AreaGraficaProvider";
import { moverFecha } from "../../utilities/date-utils";
import { AccessorsType } from "../common/grafica/GraficaTemporal";
import GraficoLeyendaComponent from "../common/grafica/GraficoLeyendaComponent";
import Loading from "../common/loading/Loading";
import ErrorMessage from "../common/message/ErrorMessage";

export default function AreaGraficaContainer() {
  const { timeRange, currentArea } = useAreaGraficaContext();
  const [maxTimeRange, setMaxTimeRange] = useState<RangeT>(null);
  const { graficaVis, error, isLoading } = useAreaGraficaAPI(
    "5",
    currentArea?.id || "",
    maxTimeRange
  );

  useEffect(() => {
    if (!maxTimeRange || !timeRange) return setMaxTimeRange(timeRange);
    if (maxTimeRange[1] < timeRange[1] || maxTimeRange[0] > timeRange[0])
      setMaxTimeRange(timeRange);
  }, [timeRange, maxTimeRange]);

  const graficaFiltered = useMemo<AreaGraficaType[]>(() => {
    if (!timeRange) return [];
    return graficaVis.map((g) => ({
      ...g,
      trama: g.trama.filter((d, i) => {
        const isInRange = d.fecha > timeRange[0] && d.fecha < timeRange[1];
        const pickMultiple =
          i % (moverFecha(timeRange[0], 14) > timeRange[1] ? 6 : 12) === 0;
        return isInRange && pickMultiple;
      }),
    }));
  }, [timeRange, graficaVis]);

  const tempAccesors = useMemo<AccessorsType<AreaDatumT>>(
    () => ({
      xAccessor: (d: AreaDatumT) => d?.fecha,
      yAccessor: (d: AreaDatumT) => d?.temp,
    }),
    []
  );
  const humeAccessors = useMemo<AccessorsType<AreaDatumT>>(
    () => ({
      xAccessor: (d: AreaDatumT) => d?.fecha,
      yAccessor: (d: AreaDatumT) => d?.hume,
    }),
    []
  );

  if (isLoading || !timeRange) return <Loading className="my-5" />;
  if (error) return <ErrorMessage message="Error al cargar gráficas" />;
  return (
    <div>
      <div className="text-secondary">Temperatura</div>
      <div className="mt-2">
        <GraficoLeyendaComponent<AreaDatumT>
          timeDomain={timeRange}
          series={graficaFiltered}
          unidad="°C"
          accessors={tempAccesors}
        />
      </div>

      <div className="text-secondary pt-4">Humedad</div>
      <div className="pt-2">
        <GraficoLeyendaComponent<AreaDatumT>
          timeDomain={timeRange}
          series={graficaFiltered}
          unidad="%"
          accessors={humeAccessors}
        />
      </div>
    </div>
  );
}
