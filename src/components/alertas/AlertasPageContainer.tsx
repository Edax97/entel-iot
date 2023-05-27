import React, { useMemo } from "react";
import { useAlertasState } from "../../api-state/useAlertasState";
import AlertasPage from "./AlertasPage";

interface Props {
  page: number;
  tipoStr: "pendientes" | "historial";
}
export default function AlertasPageContainer(props: Props) {
  const tipo = useMemo(
    () => (props.tipoStr === "pendientes" ? "1" : "0"),
    [props]
  );
  const { alertas } = useAlertasState("5", props.page, tipo);
  return <AlertasPage alertaList={alertas || []} />;
}
