import { API } from "./api";
import { DispositivoAPIType, getDispostivosAPI } from "./dispositivos-api";
import { getMethod, putMethod } from "./methods";

export interface CameraAPIType {
  loc_id: number;
  loc_codigo_m: string;
  loc_nombre: string;
  loc_max_temp: string;
  loc_min_temp: string;
  loc_max_hume: string;
  loc_min_hume: string;
  loc_descripcion: string;
  loc_status: string;
  loc_order_colum: number;
  loc_acronimo: string;
}

export type CameraDevicesType = CameraAPIType & {
  loc_devices: DispositivoAPIType[];
};

export interface CamerasDataType {
  status: boolean;
  totalRegistros: number;
  listaDatos: CameraAPIType[];
  mensaje: string;
}

export const getCamerasAPI = (codigo_m: string) =>
  getMethod<CamerasDataType>(
    `${API}/api/Consultas/locacionlista?codigo=${codigo_m}`
  ).then(({ status, listaDatos }) => {
    if (!status) throw Error("API Error");
    return listaDatos;
  });

export const getCameraDevicesAPI = async (codigo_m: string) => {
  const areaList = await getCamerasAPI(codigo_m);

  const areaDevicesList: CameraDevicesType[] = await Promise.all(
    areaList.map((area) =>
      getDispostivosAPI(`${area.loc_id}`).then((devices) => ({
        ...area,
        loc_devices: devices,
      }))
    )
  );
  return areaDevicesList;
};

export interface AreaUpdateType {
  [key: string]: string;
}
interface UpdateRes {
  rpta: number;
  mensaje: string;
}
export const updateAreaAPI = (area: AreaUpdateType) => {
  const query = Object.keys(area)
    .map((key) => `${key}=${area[key]}`)
    .join("&");
  return putMethod<UpdateRes>(
    `${API}/api/Consultas/actualizarlocacion?${query}`
  );
};
