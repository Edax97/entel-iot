import { create } from "zustand";
import { resGraficasStore, ResGraficasStoreType } from "./res-graficas-store";
import { reservoriosStore, ReservoriosStoreType } from "./reservorios-store";

export type StoreType = ReservoriosStoreType & ResGraficasStoreType;

export const useAppStore = create<StoreType>((...args) => ({
  ...reservoriosStore(...args),
  ...resGraficasStore(...args),
}));
