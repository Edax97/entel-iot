import useSWR from "swr";
import { getAlertasAPI } from "../api/alertas-api";
export function useAlertasPendientes(codigo: string, pagina: number) {
  const { data, error, isLoading } = useSWR(
    ["Consultas/alertaslista", codigo, "0", pagina],
    (args) => getAlertasAPI(...args)
  );

  return { paginas: data?.totalPaginas, alertas: data?.data, error, isLoading };
}

export function useAlertasHistorial(codigo: string, pagina: number) {
  const { data, error, isLoading } = useSWR(
    ["Consultas/alertaslista", codigo, "1", pagina],
    (args) => getAlertasAPI(...args)
  );

  return { paginas: data?.totalPaginas, alertas: data?.data, error, isLoading };
}
