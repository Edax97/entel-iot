import { timeFormat } from "d3";
import { useMemo } from "react";
import useSWR from "swr";
import { getGraficasAPI } from "../api/graficas-api";

export interface CamDatumT {
  fecha: Date;
  temp: number;
  hume: number;
}
export interface CamGraficaT {
  id: string;
  label: string;
  trama: CamDatumT[];
}

export function useAreaGraficaAPI(
  codigo_m: string,
  loc_codigo: string,
  range: [Date, Date]
) {
  const [fecha_inicio, fecha_fin] = useMemo(
    () => [timeFormat("%Y-%m-%d")(range[0]), timeFormat("%Y-%m-%d")(range[1])],
    [range]
  );

  const { data, error, isLoading } = useSWR(
    ["Consultas/listarReporte", codigo_m, loc_codigo, fecha_inicio, fecha_fin],
    (args) => getGraficasAPI(...args)
  );

  const graficaVis = useMemo<CamGraficaT[]>(() => {
    if (!data) return [];
    let graficas = data.headers.map<CamGraficaT>((h) => ({
      id: h.dispositivo_id,
      label: h.dispositivo_nombre,
      trama: [],
    }));
    data.data.forEach((d) => {
      const [temp, rest] = d.reporte_metricas_promedio.split(" ");
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
