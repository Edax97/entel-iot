import { StateCreator } from "zustand";
import { getReservoriosAPI } from "../api/reservorios-api";
import { StoreType } from "./store";

export interface ReservorioLevelType {
  id: string;
  imei: string;
  maximo: number;
  minimo: number;
  nivel: number;
  volumen: number;
  bateria: number;
  signal: number;
}

export interface ReservoriosStoreType {
  reservorios: ReservorioLevelType[];
  getResLoading: boolean;
  getResError: boolean;
  getReservorios: () => void;
}

export const reservoriosStore: StateCreator<
  StoreType,
  [],
  [],
  ReservoriosStoreType
> = (set) => ({
  reservorios: [],
  getResLoading: false,
  getResError: false,
  getReservorios: () => {
    set({ getResLoading: true, getResError: false });
    getReservoriosAPI()
      .then((reservorios) => {
        set({ getResLoading: false, reservorios });
      })
      .catch(() => set({ getResError: true, getResLoading: false }));
  },
});
