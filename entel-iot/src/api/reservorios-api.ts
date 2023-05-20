import { ReservorioLevelType } from "../store/reservorios-store";

const reservoriosURL = "data-api/reservorios.json";

interface DataReservoriosType {
  status: boolean;
  totalRegistros: number;
  listaDatos: ReservorioLevelType[];
  mensaje: string;
}

export const getReservoriosAPI = () =>
  fetch(reservoriosURL)
    .then<DataReservoriosType>((data) => data.json())
    .then(({ status, listaDatos }) => {
      if (!status) throw Error("API error");
      return listaDatos;
    });
