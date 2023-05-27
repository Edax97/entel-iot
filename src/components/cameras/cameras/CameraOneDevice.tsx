import React from "react";
import CardWidget from "../../common/card-widget/CardWidget";
import { FaExpand as Expand } from "react-icons/fa";
import BtnIcon from "../../common/btn-icon/BtnIcon";
import { SlOptions as Options } from "react-icons/sl";
import { DispositivoAPIType } from "../../../api/dispositivos-api";
import { ReactComponent as BtnGreen } from "../../../assets/btn-green.svg";
import { ReactComponent as BtnRed } from "../../../assets/btn-red.svg";

interface Props {
  cameraName: string;
  device: DispositivoAPIType;
}
export default function CameraOneDevice({ cameraName, device }: Props) {
  return (
    <CardWidget
      title={cameraName}
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
      <div className="d-flex align-items-center gap-3 m-4 mb-5">
        <div className="d-flex gap-3 align-items-end">
          <div className="d-flex align-items-center">
            {device.temp.toFixed(1)} °C
            <i className="ms-1 fs-4 bi bi-thermometer-half text-secondary"></i>
          </div>
          <div className="d-flex align-items-center">
            {device.hum.toFixed(1)} %
            <i className="ms-1 fs-4 bi bi-droplet-half text-secondary"></i>
          </div>
          <div className="d-flex align-items-center">
            {device.hum.toFixed(1)} %
            <i className="ms-1 fs-4 bi bi-battery-half text-secondary"></i>
          </div>
        </div>
        {device.temp > +device.dis_maxt ||
        device.temp < +device.dis_mint ||
        device.hum > +device.dis_maxh ||
        device.hum < +device.dis_minh ? (
          <BtnRed width={48} height={48} />
        ) : (
          <BtnGreen width={48} height={48} />
        )}
        <span className="text-secondary" style={{ fontSize: "small" }}>
          {device.dis_sensor_id}
        </span>
      </div>
    </CardWidget>
  );
}
