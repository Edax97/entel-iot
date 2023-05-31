import React, { useCallback, useMemo, useState } from "react";
import { useAreasState } from "../../../api-state/useAreasState";
import Loading from "../../common/loading/Loading";
import ErrorMessage from "../../common/message/ErrorMessage";
import { FaExpand as Expand } from "react-icons/fa";
import CardWidget from "../../common/card-widget/CardWidget";
import BtnIcon from "../../common/btn-icon/BtnIcon";
import Paginacion from "../../common/paginacion/Paginacion";
import AreaLista from "./AreaLista";
import { CameraAPIType, updateAreaAPI } from "../../../api/cameras-api";
import { useAppStore } from "../../../store/store";
const itemsPerPage = 10;

export default function AreasContainer() {
  const id = useAppStore((state) => state.user?.id);
  const { areaLista, registros, error, isLoading, mutate } = useAreasState(
    `${id}`
  );
  const [editError, setEditError] = useState(false);

  const [page, setPage] = useState(1);
  const pageCount = useMemo(
    () => (registros ? Math.ceil(registros / itemsPerPage) : 1),
    [registros]
  );

  const areasPage = useMemo(
    () => areaLista?.slice(itemsPerPage * (page - 1), itemsPerPage * page),
    [areaLista, page]
  );

  const onEdit = useCallback(
    async (a: CameraAPIType) => {
      setEditError(false);
      const areaUpdate = {
        id: `${a.loc_id}`,
        descripcion: a.loc_descripcion,
        estado: a.loc_status,
        max_temperatura: a.loc_max_temp,
        min_temperatura: a.loc_min_temp,
        max_humedad: a.loc_max_hume,
        min_humedad: a.loc_min_hume,
      };

      try {
        const res = await updateAreaAPI(areaUpdate);
        if (res.rpta > 0) mutate();
      } catch (e) {
        setEditError(true);
      }
    },
    [mutate]
  );

  if (isLoading) return <Loading className="my-5" />;
  if (error || !areaLista || !areasPage)
    return (
      <ErrorMessage className="my-4" message="Error al cargar configuración." />
    );
  return (
    <CardWidget
      title="Configurar áreas registradas."
      toolbar={
        <>
          <BtnIcon>
            <Expand className="fs-6 text-white" />
          </BtnIcon>
          <BtnIcon>
            <i className="bi bi-arrow-clockwise text-white" />
          </BtnIcon>
        </>
      }
    >
      <div className="p-4 pb-2">
        <AreaLista onEdit={onEdit} areaLista={areasPage} />
        <div className="d-flex justify-content-end pt-3">
          <Paginacion
            pageCount={pageCount}
            onPageChange={(item) => {
              setPage(item.selected + 1);
            }}
          />
        </div>
        {editError && (
          <ErrorMessage className="pt-3" message="Error al actualizar área." />
        )}
      </div>
    </CardWidget>
  );
}
