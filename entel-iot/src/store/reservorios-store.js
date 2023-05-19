import { getReservoriosAPI } from "../api/reservorios-api";

export const reservoriosStore = (set) => ({
  reservorios: null,
  getLoading: false,
  getError: false,
  getReservorios: async () => {
    const reservoriosData = await getReservoriosAPI();
    const reservorios = reservoriosData.datos;
    set({ reservorios });
  },
});
