import React, { useCallback, useMemo } from "react";
import { useAreasState } from "../../api-state/useAreasState";
import { CameraAPIType } from "../../api/cameras-api";
import { useAreaGraficaContext } from "../../store/AreaGraficaProvider";
import AreaValues from "./AreaValues";

export default function AreaValuesContainer() {
  const { currentArea } = useAreaGraficaContext();
  const { areaLista } = useAreasState("5");

  const area = useMemo<CameraAPIType | null>(() => {
    if (!currentArea) return null;
    return areaLista.find((a) => a.loc_id === +currentArea.id) || null;
  }, [currentArea, areaLista]);

  const onSave = useCallback((a: CameraAPIType) => {}, []);

  if (!area) return null;
  return <AreaValues area={area} onSave={onSave} />;
}
