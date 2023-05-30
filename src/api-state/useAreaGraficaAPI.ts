import { timeFormat } from "d3";
import { useMemo } from "react";
import useSWR from "swr";
import { getGraficasAPI } from "../api/graficas-api";
import { RangeT } from "../store/AreaGraficaProvider";

export interface AreaDatumT {
  fecha: Date;
  temp: number;
  hume: number;
}
export interface AreaGraficaType {
  id: string;
  label: string;
  trama: AreaDatumT[];
}

export function useAreaGraficaAPI(
  codigo_m: string,
  loc_codigo: string,
  range: RangeT
) {
  const [fecha_inicio, fecha_fin] = useMemo(() => {
    if (!range) return ["", ""];
    return [timeFormat("%Y-%m-%d")(range[0]), timeFormat("%Y-%m-%d")(range[1])];
  }, [range]);

  const { data, error, isLoading } = useSWR(
    ["Consultas/listarReporte", codigo_m, loc_codigo, fecha_inicio, fecha_fin],
    (args) => getGraficasAPI(...args)
  );

  const graficaVis = useMemo<AreaGraficaType[]>(() => {
    if (!data) return [];
    let graficas = data.headers.map<AreaGraficaType>((h) => ({
      id: h.dispositivo_id,
      label: h.dispositivo_nombre,
      trama: [],
    }));
    data.data.forEach((d) => {
      const [temp, rest] = d.reporte_metricas_prom.split(" ");
      const hume = rest.split("C")[1].slice(0, -1);
      const fecha = new Date(d.reporte_fecha);
      graficas = graficas.map((g) => {
        if (g.id === d.reporte_sensor_id)
          return {
            ...g,
            trama: [{ fecha, hume: +hume, temp: +temp }, ...g.trama],
          };
        return g;
      });
    });
    return graficas;
  }, [data]);

  return { graficaVis, error, isLoading };
}
