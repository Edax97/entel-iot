import { useMemo, useState } from "react";
import { useReporteAPI } from "../../api-state/useReporteAPI";
import { useAreaGraficaContext } from "../../store/AreaGraficaProvider";
import { useAppStore } from "../../store/store";
import CardWidget from "../common/card-widget/CardWidget";
import Paginacion from "../common/paginacion/Paginacion";
import Loading from "../common/loading/Loading";
import ReporteTable from "./ReporteTable";

const itemsPerPage = 15;

export default function ReporteContainer() {
  const id = useAppStore((state) => state.user?.id);
  const { timeRange, currentArea } = useAreaGraficaContext();
  const { headersReporte, dataReporte, error, isLoading } = useReporteAPI(
    `${id}`,
    currentArea?.id || "100",
    timeRange
  );

  const [page, setPage] = useState(1);
  const pageCount = useMemo(
    () => Math.ceil(dataReporte.length / itemsPerPage),
    [dataReporte]
  );

  const pageReporte = useMemo(
    () => dataReporte.slice(itemsPerPage * (page - 1), itemsPerPage * page),
    [dataReporte, page]
  );

  if (isLoading || !dataReporte) return <Loading className="my-5" />;
  if (error) return null;
  return (
    <CardWidget title={`REPORTE ${currentArea?.name}`} toolbar={true}>
      <div className="p-4 pb-2">
        <ReporteTable headers={headersReporte} pageReporte={pageReporte} />
        <div className="d-flex justify-content-end pt-3">
          <Paginacion
            pageCount={pageCount}
            onPageChange={(item) => {
              setPage(item.selected + 1);
            }}
          />
        </div>
      </div>
    </CardWidget>
  );
}
