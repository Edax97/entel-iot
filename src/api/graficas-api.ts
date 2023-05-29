import { API } from "./api";
import { getMethod } from "./methods";

export interface GraficasResType {
  status: boolean;
  mensaje: string;
  totalRegistros: number;
  listaDatos: any[];
}

export const getGraficasAPI = (graficasAPI: string) =>
  getMethod<GraficasResType>(`${API}/api/${graficasAPI}`).then(
    ({ status, listaDatos }) => {
      if (!status) throw Error("API Error");
      return listaDatos;
    }
  );
