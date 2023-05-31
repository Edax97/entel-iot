import React, { useCallback, useMemo, useState } from "react";
import { useAreasState } from "../../api-state/useAreasState";
import { CameraAPIType, updateAreaAPI } from "../../api/cameras-api";
import { useAreaGraficaContext } from "../../store/AreaGraficaProvider";
import { useAppStore } from "../../store/store";
import Loading from "../common/loading/Loading";
import ErrorMessage from "../common/message/ErrorMessage";
import AreaValues from "./AreaValues";

export default function AreaValuesContainer() {
  const id = useAppStore((state) => state.user?.id);
  const { currentArea } = useAreaGraficaContext();
  const { areaLista, mutate, isLoading, error } = useAreasState(`${id}`);

  const area = useMemo<CameraAPIType | null>(() => {
    if (!currentArea) return null;
    return areaLista.find((a) => a.loc_id === +currentArea.id) || null;
  }, [currentArea, areaLista]);

  const [saveError, setSaveError] = useState(false);

  const onSave = useCallback(
    (a: CameraAPIType) => {
      setSaveError(false);
      const areaUpdate = {
        id: `${a.loc_id}`,
        descripcion: a.loc_descripcion,
        estado: a.loc_status,
        max_temperatura: a.loc_max_temp,
        min_temperatura: a.loc_min_temp,
        max_humedad: a.loc_max_hume,
        min_humedad: a.loc_min_hume,
      };
      updateAreaAPI(areaUpdate)
        .then((res) => {
          mutate();
        })
        .catch(() => setSaveError(true));
    },
    [mutate]
  );

  if (isLoading) return <Loading className="my-5" />;
  if (error)
    return <ErrorMessage className="my-4" message="Error al cargar valores." />;
  if (!area) return null;
  return (
    <>
      <AreaValues area={area} onSave={onSave} />
      {saveError && (
        <ErrorMessage className="mt-3" message="Error al guardar valores." />
      )}
    </>
  );
}
