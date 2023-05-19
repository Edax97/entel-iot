import { StateCreator } from "zustand";
import { getReservoriosAPI } from "../api/reservorios-api";
import { StoreType } from "./store";

export interface ReservoriosStoreType {
  reservorios: any;
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
  reservorios: null,
  getLoading: false,
  getError: false,
  getReservorios: async () => {
    const reservoriosData = await getReservoriosAPI();
    const reservorios = reservoriosData.datos;
    set({ reservorios });
  },
});
