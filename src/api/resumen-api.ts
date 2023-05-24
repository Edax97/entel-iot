const contadoresURL = "data-api/contadores-resumen.json";

export interface ResumenType {
  areas_total: number;
  dispositivos_total: number;
  alertas_total: number;
}

interface DataContadoresType {
  status: boolean;
  datos: ResumenType;
  mensaje: string;
}

export const getResumenAPI = () =>
  fetch(contadoresURL)
    .then<DataContadoresType>((data) => data.json())
    .then(({ status, datos }) => {
      if (!status) throw Error("API Error");
      return datos;
    });
