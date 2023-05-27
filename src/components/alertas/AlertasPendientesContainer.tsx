import React, { useState } from "react";
import { useAlertasPendientes } from "../../api-state/useAlertasState";
import Loading from "../common/loading/Loading";
import ErrorMessage from "../common/message/ErrorMessage";
import Paginacion from "./Paginacion";

export default function AlertasPendientesContainer() {
  const { paginas, error, isLoading } = useAlertasPendientes("5", 1);

  const [page, setPage] = useState<number>(10);

  if (isLoading) return <Loading className="my-5" />;
  if (error)
    return <ErrorMessage message="Error al cargar alertas." className="my-3" />;
  return (
    <div>
      <div>PAGINA</div>
      <div className="d-flex justify-content-end">
        <Paginacion
          pageCount={paginas || 1}
          onPageChange={(item) => {
            setPage(item.selected);
          }}
        />
      </div>
    </div>
  );
}
