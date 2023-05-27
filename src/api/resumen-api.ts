import { API } from "./api";
import { postMethod } from "./methods";

export interface ResumenType {
  areas_total: number;
  dispositivos_total: number;
  alertas_total: number;
}

interface DataContadoresType {
  status: boolean;
  data: ResumenType;
  mensaje: string;
}

export const getResumenAPI = (codigo_m: string) =>
  postMethod<DataContadoresType>(
    `${API}/api/Consultas/contadores?codigo=${codigo_m}`
  ).then(({ status, data }) => {
    if (!status) throw Error("API Error");
    return data;
  });
