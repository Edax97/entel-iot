import { ReservorioLevelType } from "../store/reservorios-store";

const reservoriosURL = "data-api/reservorios.json";

interface DataReservoriosType {
  success: boolean;
  datos: ReservorioLevelType[];
  error: string;
}

export const getReservoriosAPI = () =>
  fetch(reservoriosURL)
    .then<DataReservoriosType>((data) => data.json())
    .then(({ success, datos }) => {
      if (!success) throw Error("API error");
      return datos;
    });
