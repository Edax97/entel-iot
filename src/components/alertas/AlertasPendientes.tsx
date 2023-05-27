import React, { useCallback, useState } from "react";
import { useAlertasState } from "../../api-state/useAlertasState";
import BtnIcon from "../common/btn-icon/BtnIcon";
import CardWidget from "../common/card-widget/CardWidget";
import Loading from "../common/loading/Loading";
import ErrorMessage from "../common/message/ErrorMessage";
import Paginacion from "../common/paginacion/Paginacion";
import { FaExpand as Expand } from "react-icons/fa";
import { SlOptions as Options } from "react-icons/sl";
import AlertasPageContainer from "./AlertasPageContainer";

export default function AlertasPendientes() {
  const [page, setPage] = useState<number>(1);
  const { paginas, error, isLoading } = useAlertasState("5", 1, "1");

  const prev = useCallback(
    (page: number) => {
      if (page === 1) return paginas || 1;
      return page - 1;
    },
    [paginas]
  );
  const next = useCallback(
    (page: number) => {
      if (page === paginas) return 1;
      return page + 1;
    },
    [paginas]
  );

  if (isLoading) return <Loading className="my-5" />;
  if (error)
    return <ErrorMessage message="Error al cargar alertas." className="my-3" />;
  return (
    <CardWidget
      title="Alertas activas"
      toolbar={
        <>
          <BtnIcon>
            <Expand className="fs-6 text-secondary" />
          </BtnIcon>
          <BtnIcon>
            <Options className="fs-6 text-secondary" />
          </BtnIcon>
        </>
      }
    >
      <div className="m-4 mx-5">
        <div className="d-none">
          <AlertasPageContainer page={prev(page)} tipoStr="pendientes" />
          <AlertasPageContainer page={next(page)} tipoStr="pendientes" />
        </div>
        <div>
          <AlertasPageContainer page={page} tipoStr="pendientes" />
        </div>
        <div className="d-flex justify-content-end">
          <Paginacion
            pageCount={paginas || 1}
            onPageChange={(item) => {
              console.log("Item selected", item.selected);
              setPage(item.selected + 1);
            }}
          />
        </div>
      </div>
    </CardWidget>
  );
}
