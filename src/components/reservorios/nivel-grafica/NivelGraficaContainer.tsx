import { LevelDatumType } from "../../../store/res-graficas-store";
import CardWidget from "../../common/card-widget/CardWidget";
import GraficoLeyendaComponent from "../../common/grafica/GraficoLeyendaComponent";
import { useAppStore } from "../../../store/store";
import Loading from "../../common/loading/Loading";
import ErrorMessage from "../../common/message/ErrorMessage";
import { AccessorsType } from "../../common/grafica/GraficaTemporal";
import SelectRangeContainer from "../../graficas/select/SelectRangeContainer";

export default function NivelGraficaContainer() {
  const timeRange = useAppStore((state) => state.resTimeRange);
  const series = useAppStore((state) => state.resGraficas);
  const loading = useAppStore((state) => state.getGraficasLoading);
  const error = useAppStore((state) => state.getGraficasError);

  const accesors: AccessorsType<LevelDatumType> = {
    xAccessor: (d: LevelDatumType) => d?.fecha,
    yAccessor: (d: LevelDatumType) => d?.nivel,
  };

  if (loading) return <Loading className="my-5" />;
  if (error) return <ErrorMessage message="Error al cargar gráfica." />;
  if (!timeRange) return null;
  return (
    <CardWidget title="Evolución temporal" toolbar={true}>
      <div className="p-4 pb-5">
        <SelectRangeContainer />
        <div className="mt-3">
          <GraficoLeyendaComponent<LevelDatumType>
            title="Nivel (m)"
            timeDomain={timeRange}
            series={series}
            unidad="m"
            accessors={accesors}
          />
        </div>
        <div className="mt-3">
          <GraficoLeyendaComponent<LevelDatumType>
            title="Volumen (m³)"
            timeDomain={timeRange}
            series={series}
            unidad="m"
            accessors={accesors}
          />
        </div>
      </div>
    </CardWidget>
  );
}
