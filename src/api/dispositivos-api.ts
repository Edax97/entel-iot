const dispositivosURL = "data-api/devices";
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
  dis_temp: string;
  dis_hume: string;
}

export interface DispositivosDataType {
  status: boolean;
  totalRegistros: number;
  listaDatos: DispositivoAPIType[];
  mensaje: string;
}

export const getDispostivosAPI = (codigo_m: string, loc_codigo: string) =>
  fetch(`${dispositivosURL}-${codigo_m}-${loc_codigo}.json`)
    .then<DispositivosDataType>((data) => data.json())
    .then(({ status, listaDatos }) => {
      if (!status) throw Error("API Error");
      return listaDatos;
    });
