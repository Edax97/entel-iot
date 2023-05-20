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
  getLoading: boolean;
  getError: boolean;
  getReservorios: () => void;
}

export const reservoriosStore: StateCreator<
  StoreType,
  [],
  [],
  ReservoriosStoreType
> = (set) => ({
  reservorios: [],
  getLoading: true,
  getError: false,
  getReservorios: () => {
    set({ getLoading: true, getError: false });
    getReservoriosAPI()
      .then((reservorios) => {
        set({ getLoading: false, reservorios });
      })
      .catch(() => set({ getError: true, getLoading: false }));
  },
});
