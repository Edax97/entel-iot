import { create } from "zustand";
import { reservoriosStore } from "./reservorios-store";

export const useEntelStore = create((...args) => ({
  ...reservoriosStore(...args),
}));
