import CardWidget from "../../common/card-widget/CardWidget";

import SignalIndicator from "./SignalIndicator";
import ReservorioDiagram from "../reservorio-diagram/ReservorioDiagram";
import BatteryIndicator from "./BatteryIndicator";
import { ReservorioLevelType } from "../../../api/reservorios-api";

interface Props {
  reservorios: ReservorioLevelType[];
}
export default function NivelReservorios(props: Props) {
  return (
    <CardWidget title="Nivel de reservorios" toolbar={true}>
      <div className="d-flex justify-content-around gap-5 flex-wrap m-4 mb-5">
        {props.reservorios.map((res) => {
          const filled = res.nivel / res.maximo;
          const inRange = res.nivel < res.maximo && res.nivel > res.minimo;
          const isLowBat = res.bateria < 10;
          return (
            <div key={res.id} className="">
              <div className="text-center text-secondary">
                <span>Reservorio {res.id}</span>
              </div>
              <div className="d-flex mt-3">
                <div className="d-flex flex-column gap-3">
                  <div className="text-secondary">
                    <SignalIndicator signal={res.signal} className="fs-5" />
                    <div
                      className={`d-flex gap-1 align-items-center ${
                        isLowBat && "text-danger"
                      }`}
                    >
                      <BatteryIndicator
                        battery={res.bateria}
                        className="fs-4 me-1"
                      />
                      <span style={{ fontSize: "small" }}>{res.bateria}%</span>
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-secondary"
                      style={{ fontSize: "small" }}
                    >
                      Máximo
                    </div>
                    <div>{res.maximo} m</div>
                  </div>
                  <div>
                    <div
                      className="text-secondary"
                      style={{ fontSize: "small" }}
                    >
                      Mínimo
                    </div>
                    <div>{res.minimo} m</div>
                  </div>
                </div>
                <div className="ms-auto ps-3">
                  <ReservorioDiagram
                    width={140}
                    height={140}
                    nivel={res.nivel}
                    volumen={res.volumen}
                    filled={filled}
                    inRange={inRange}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </CardWidget>
  );
}
