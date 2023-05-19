import { create } from "zustand";
import { reservoriosStore, ReservoriosStoreType } from "./reservorios-store";

export type StoreType = ReservoriosStoreType;

export const useEntelStore = create<StoreType>((...args) => ({
  ...reservoriosStore(...args),
}));
