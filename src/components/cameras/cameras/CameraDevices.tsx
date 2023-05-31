import React, { useMemo } from "react";
import { DispositivoAPIType } from "../../../api/dispositivos-api";
import CardWidget from "../../common/card-widget/CardWidget";
import { FaExpand as Expand } from "react-icons/fa";
import BtnIcon from "../../common/btn-icon/BtnIcon";
import CameraDiagram from "./CameraDiagram";

interface Props {
  cameraName: string;
  deviceList: DispositivoAPIType[];
}
export default function CameraDevices({ cameraName, deviceList }: Props) {
  const tempPromedio = useMemo(
    () =>
      deviceList.reduce<number>((temp, dev) => temp + +dev.temp, 0) /
      deviceList.length,
    [deviceList]
  );
  const humePromedio = useMemo(
    () =>
      deviceList.reduce<number>((temp, dev) => temp + +dev.hum, 0) /
      deviceList.length,
    [deviceList]
  );

  return (
    <CardWidget
      title={cameraName}
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
      <div className="d-flex justify-content-center align-items-center m-4 mb-5 gap-4">
        <div>
          <CameraDiagram width={370} radius={12} deviceList={deviceList} />
        </div>
        <div className="d-flex flex-column align-items-end">
          <div className="text-secondary" style={{ fontSize: "small" }}>
            Temperatura Promedio
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="fs-5">{tempPromedio.toFixed(1)} °C</span>
            <i className="fs-2 bi bi-thermometer-half text-danger"></i>
          </div>
          <div className="mt-3 text-secondary" style={{ fontSize: "small" }}>
            Humedad Promedio
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="fs-5">{humePromedio.toFixed(1)} %</span>
            <i className="fs-2 bi bi-droplet-half text-info"></i>
          </div>
        </div>
      </div>
    </CardWidget>
  );
}
