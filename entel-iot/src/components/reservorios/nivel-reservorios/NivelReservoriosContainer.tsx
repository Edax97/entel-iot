import React from "react";
import { useAppStore } from "../../../store/store";
import Loading from "../../common/loading/Loading";
import ErrorMessage from "../../common/message/ErrorMessage";
import NivelReservorios from "./NivelReservorios";

export default function NivelReservoriosContainer() {
  const reservorios = useAppStore((state) => state.reservorios);
  const getLoading = useAppStore((state) => state.getLoading);
  const getError = useAppStore((state) => state.getError);

  if (getLoading) return <Loading className="my-5" />;
  if (getError) return <ErrorMessage message="Error al cargar datos." />;
  return <NivelReservorios reservorios={reservorios} />;
}
