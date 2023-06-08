import { useReporteAPI } from "../../api-state/useReporteAPI";
import { useAreaGraficaContext } from "../../store/AreaGraficaProvider";
import { useAppStore } from "../../store/store";
import CardWidget from "../common/card-widget/CardWidget";
import Loading from "../common/loading/Loading";
import ReportTable from "./ReportTable";

export default function ReporteContainer() {
  const id = useAppStore((state) => state.user?.id);
  const { timeRange, currentArea } = useAreaGraficaContext();
  const { headersReporte, dataReporte, error, isLoading } = useReporteAPI(
    `${id}`,
    currentArea?.id || "100",
    timeRange
  );

  if (isLoading || !dataReporte) return <Loading className="my-5" />;
  if (error) return null;
  return (
    <CardWidget title={`REPORTE ${currentArea?.name}`} toolbar={true}>
      <div className="px-4 py-2">
        <ReportTable headers={headersReporte} dataReporte={dataReporte} />
      </div>
    </CardWidget>
  );
}
