import React from "react";
import { ReservorioLevelType } from "../../../store/reservorios-store";
import CardWidget from "../../common/card-widget/CardWidget";
import { SlOptions as Options } from "react-icons/sl";
import { FaExpand as Expand } from "react-icons/fa";
import { GoPrimitiveDot as Dot } from "react-icons/go";
import { ReactComponent as WaterSensor } from "../../../assets/water-sensor.svg";

import { BsBatteryHalf as Battery } from "react-icons/bs";
import SignalIndicator from "../signal-indicator/SignalIndicator";
import ReservorioDiagram from "../reservorio-diagram/ReservorioDiagram";

interface Props {
  reservorios: ReservorioLevelType[];
}
export default function NivelReservorios(props: Props) {
  return (
    <CardWidget
      title="Nivel de reservorios"
      toolbar={
        <>
          <Expand className="fs-6 text-secondary" />
          <Options className="fs-6 text-secondary" />
        </>
      }
    >
      <div className="d-flex justify-content-around gap-5 flex-wrap m-4 mb-5">
        {props.reservorios.map((res) => (
          <div key={res.id} className="">
            <div className="d-flex gap-2 text-secondary align-items-center">
              <span>Reservorio {res.id}</span>
              <Dot
                className={`fs-5 ${
                  res.nivel < res.maximo && res.nivel > res.minimo
                    ? "text-success"
                    : "text-danger"
                }`}
              />
              <Options className="ms-auto fs-6" />
            </div>
            <div className="pt-3 d-flex" style={{ paddingRight: "110px" }}>
              <span
                className="ms-auto me-1 text-secondary text-end"
                style={{ fontSize: "x-small" }}
              >
                <SignalIndicator signal={res.signal} />
                <div className="d-flex gap-1 align-items-center">
                  {res.bateria}% <Battery className="fs-5" />
                </div>
              </span>
              <WaterSensor style={{ height: "60px" }} />
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column gap-4 justify-content-center">
                <div>
                  <div className="text-secondary" style={{ fontSize: "small" }}>
                    Máximo
                  </div>
                  <div>{res.maximo}</div>
                </div>
                <div>
                  <div className="text-secondary" style={{ fontSize: "small" }}>
                    Mínimo
                  </div>
                  <div>{res.minimo}</div>
                </div>
              </div>
              <div className="ms-auto">
                <ReservorioDiagram
                  ps={20}
                  width={160}
                  height={180}
                  nivel={res.nivel}
                  volumen={res.volumen}
                  filled={(res.nivel - res.minimo) / (res.maximo - res.minimo)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardWidget>
  );
}
