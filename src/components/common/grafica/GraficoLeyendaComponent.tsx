import { ParentSize } from "@visx/responsive";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { coloresList } from "./colores";
import {
  AccessorsType,
  GraficaTemporal,
  SeriesVisType,
} from "./GraficaTemporal";
import Leyenda from "./Leyenda";

interface SeriesType<DatumT> {
  trama: DatumT[];
  label: string;
}
interface Props<DatumT> {
  className?: string;
  timeDomain: [Date, Date];
  series: SeriesType<DatumT>[];
  unidad: string;
  accessors: AccessorsType<DatumT>;
}

export default function GraficoLeyendaComponent<DatumT extends {}>({
  className,
  series,
  ...graficoProps
}: Props<DatumT>) {
  const [seriesVis, setSeriesVis] = useState<SeriesVisType<DatumT>[]>([]);

  useEffect(() => {
    setSeriesVis(
      series.map((serie, id) => ({
        id,
        trama: serie.trama,
        label: serie.label,
        showSeries: true,
        color: coloresList[id],
      }))
    );
  }, [series]);

  const seriesLegend = useMemo(
    () => seriesVis.map(({ id, label, color }) => ({ id, label, color })),
    [seriesVis]
  );

  const toggleSeries = useCallback(
    (id: number) => {
      setSeriesVis(
        seriesVis.map((serie) => {
          if (serie.id === id)
            return { ...serie, showSeries: !serie.showSeries };
          return serie;
        })
      );
    },
    [setSeriesVis, seriesVis]
  );

  const leyendaHeight = 32;

  return (
    <ParentSize>
      {({ width, height }) => (
        <>
          <div className="ps-5" style={{ height: leyendaHeight }}>
            <Leyenda seriesLegend={seriesLegend} toggleSeries={toggleSeries} />
          </div>
          <GraficaTemporal<DatumT>
            width={width}
            height={height - leyendaHeight}
            seriesVis={seriesVis}
            {...graficoProps}
          />
        </>
      )}
    </ParentSize>
  );
}
