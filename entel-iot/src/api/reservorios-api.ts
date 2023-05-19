const reservoriosURL = "data-api/reservorios.json";
export const getReservoriosAPI = async () => {
  const data = await fetch(reservoriosURL);
  return data.json();
};
