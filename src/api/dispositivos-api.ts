import { API } from "./api";
import { postMethod } from "./methods";

export interface DispositivoAPIType {
  dis_id: number;
  dis_mas: number;
  dis_loc: string;
  dis_sensor_id: string;
  dis_nom: string;
  dis_maxt: string;
  dis_mint: string;
  dis_maxh: string;
  dis_minh: string;
  dis_status: string;
  dis_last_up: string;
  loc_nom: string;
  temp: number;
  hum: number;
  bat: number;
}

export interface DispositivosDataType {
  status: boolean;
  totalRegistros: number;
  listaDatos: DispositivoAPIType[];
  mensaje: string;
}

export const getDispostivosAPI = (loc_codigo: string) =>
  postMethod<DispositivosDataType>(
    `${API}/api/Consultas/dispositivoslista?codigo=${loc_codigo}&tipo=0`
  ).then(({ status, listaDatos }) => {
    if (!status) throw Error("API Error");
    return listaDatos;
  });
