import React, { useMemo } from "react";
import { useAlertasAPI } from "../../api-state/useAlertasAPI";
import { useAppStore } from "../../store/store";
import AlertasPage from "./AlertasPage";

interface Props {
  page: number;
  tipoStr: "pendientes" | "historial";
}
export default function AlertasPageContainer(props: Props) {
  const id = useAppStore((state) => state.user?.id);

  const tipo = useMemo(
    () => (props.tipoStr === "pendientes" ? "1" : "0"),
    [props]
  );
  const { alertas } = useAlertasAPI(`${id}`, props.page, tipo);
  return <AlertasPage alertaList={alertas || []} />;
}
