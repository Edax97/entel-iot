import { useCallback, useMemo, useState } from "react";
import CardWidget from "../../common/card-widget/CardWidget";
import DispositivosLista from "./DispositivosLista";
import {
  DispositivoAPIType,
  updateDispositivoAPI,
} from "../../../api/dispositivos-api";
import { useDispositivosAPI } from "../../../api-state/useDispositivosAPI";
import Loading from "../../common/loading/Loading";
import ErrorMessage from "../../common/message/ErrorMessage";
import Paginacion from "../../common/paginacion/Paginacion";
import { useAppStore } from "../../../store/store";
import SuccessMessage from "../../common/message/SuccessMessage";

const itemsPerPage = 10;

export default function DispositivosContainer() {
  const id = useAppStore((state) => state.user?.id);
  const { registros, dispositivoLista, error, isLoading, mutate } =
    useDispositivosAPI(`${id}`);

  const [page, setPage] = useState(1);
  const pageCount = useMemo(
    () => (registros ? Math.ceil(registros / itemsPerPage) : 1),
    [registros]
  );

  const dispositivosPage = useMemo(
    () =>
      dispositivoLista?.slice(itemsPerPage * (page - 1), itemsPerPage * page),
    [dispositivoLista, page]
  );
  const [editState, setEditState] = useState({
    error: false,
    success: false,
    loading: false,
  });
  const onEdit = useCallback(
    async (d: DispositivoAPIType) => {
      setEditState({ error: false, success: false, loading: true });
      const dispositivoUpdate = {
        id: `${d.dis_id}`,
        loc_id: d.dis_locacion,
        estado: d.dis_status,
        max_temperatura: d.dis_maxt,
        min_temperatura: d.dis_mint,
        max_humedad: d.dis_maxh,
        min_humedad: d.dis_minh,
      };

      try {
        await updateDispositivoAPI(dispositivoUpdate);
        mutate();
        setEditState({ ...editState, success: true, loading: false });
      } catch (e) {
        setEditState({ ...editState, error: true, loading: false });
      }
    },
    [mutate, editState]
  );

  if (isLoading) return <Loading className="my-5" />;
  if (error || !dispositivoLista || !dispositivosPage)
    return (
      <ErrorMessage className="my-4" message="Error al cargar configuración." />
    );
  return (
    <CardWidget title="Configurar dispositivos registrados." toolbar={true}>
      <div className="pt-4 pb-2">
        <DispositivosLista
          onEdit={onEdit}
          dispositivoLista={dispositivosPage}
          editLoading={editState.loading}
        />
        <div className="d-flex justify-content-end pt-3">
          <Paginacion
            pageCount={pageCount}
            onPageChange={(item) => {
              setPage(item.selected + 1);
            }}
          />
        </div>
        {editState.error && (
          <ErrorMessage
            className="mt-3"
            message="Error al actualizar dispositivo."
          />
        )}
        {editState.success && (
          <SuccessMessage className="mt-3" message="Dispositivo actualizado." />
        )}
      </div>
    </CardWidget>
  );
}
