import { useCallback, useMemo, useState } from "react";
import CardWidget from "../../common/card-widget/CardWidget";
import DispositivosLista from "./DispositivosLista";
import {
  DispositivoAPIType,
  updateDispositivoAPI,
} from "../../../api/dispositivos-api";
import { useDispositivosState } from "../../../api-state/useDispositivosState";
import Loading from "../../common/loading/Loading";
import ErrorMessage from "../../common/message/ErrorMessage";
import Paginacion from "../../common/paginacion/Paginacion";
import { useAppStore } from "../../../store/store";

const itemsPerPage = 10;

export default function DispositivosContainer() {
  const id = useAppStore((state) => state.user?.id);
  const { registros, dispositivoLista, error, isLoading, mutate } =
    useDispositivosState(`${id}`);

  const [editError, setEditError] = useState(false);

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

  const onEdit = useCallback(
    async (d: DispositivoAPIType) => {
      setEditError(false);
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
        const res = await updateDispositivoAPI(dispositivoUpdate);
        if (res.rpta > 0) mutate();
      } catch (e) {
        setEditError(true);
      }
    },
    [mutate]
  );

  if (isLoading) return <Loading className="my-5" />;
  if (error || !dispositivoLista || !dispositivosPage)
    return (
      <ErrorMessage className="my-4" message="Error al cargar configuración." />
    );
  return (
    <CardWidget title="Configurar dispositivos registrados." toolbar={true}>
      <div className="p-4 pb-2">
        <DispositivosLista
          onEdit={onEdit}
          dispositivoLista={dispositivosPage}
        />
        <div className="d-flex justify-content-end pt-3">
          <Paginacion
            pageCount={pageCount}
            onPageChange={(item) => {
              setPage(item.selected + 1);
            }}
          />
        </div>
        {editError && (
          <ErrorMessage
            className="pt-3"
            message="Error al actualizar dispositivo."
          />
        )}
      </div>
    </CardWidget>
  );
}
