import { create } from "zustand";
import { camerasStore, CamerasStoreType } from "./cameras-store";
import { resGraficasStore, ResGraficasStoreType } from "./res-graficas-store";
import { reservoriosStore, ReservoriosStoreType } from "./reservorios-store";
import { resumenStore, ResumenStoreType } from "./resumen-store";

export type StoreType = ReservoriosStoreType &
  ResGraficasStoreType &
  ResumenStoreType &
  CamerasStoreType;

export const useAppStore = create<StoreType>((...args) => ({
  ...reservoriosStore(...args),
  ...resGraficasStore(...args),
  ...resumenStore(...args),
  ...camerasStore(...args),
}));
