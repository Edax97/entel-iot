import React, { CSSProperties } from "react";
import { DispositivoAPIType } from "../../../api/dispositivos-api";
import CameraBackground from "../../../assets/camera.svg";
import { ReactComponent as BtnGreen } from "../../../assets/btn-green.svg";
import { ReactComponent as BtnRed } from "../../../assets/btn-red.svg";

interface Props {
  width: number;
  radius: number;
  deviceList: DispositivoAPIType[];
}
export default function CameraDiagram(props: Props) {
  const height = (props.width * 360) / 472;
  const width_step = props.width / 4;
  const height_step = height / 3;
  return (
    <div
      style={{
        backgroundImage: `url(${CameraBackground})`,
        backgroundSize: "cover",
        width: props.width,
        height: height,
        position: "relative",
      }}
    >
      {props.deviceList.map((dev, i) => {
        const x = ((i % 3) + 1) * width_step;
        const y = (Math.floor(i / 3) + 1) * height_step;
        const boxStyle = i >= 3 ? { top: y } : { top: y - height_step };
        const boxClass =
          i >= 3 ? "justify-content-start" : "justify-content-end";
        const btnStyle: CSSProperties = {
          position: "absolute",
          top: y - props.radius,
          left: x - props.radius,
          width: 2 * props.radius,
          height: 2 * props.radius,
        };

        const textStyle =
          i >= 3
            ? {
                top: y - 1.2 * props.radius,
                transform: "translate(-50%, -100%)",
              }
            : { top: y + 1.2 * props.radius, transform: "translate(-50%)" };

        return (
          <div key={dev.dis_id}>
            {dev.temp > +dev.dis_maxt ||
            dev.temp < +dev.dis_mint ||
            dev.hum > +dev.dis_maxh ||
            dev.hum < +dev.dis_minh ? (
              <BtnRed style={btnStyle} />
            ) : (
              <BtnGreen style={btnStyle} />
            )}
            <div
              className={`d-flex flex-column align-items-end ${boxClass}`}
              style={{
                position: "absolute",
                left: x - width_step,
                height: height_step,
                width: width_step,
                fontSize: "small",
                lineHeight: 1.1,
                padding: props.radius * 0.8,
                ...boxStyle,
              }}
            >
              <div className="d-flex align-items-center">
                <span>{dev.temp.toFixed(1)} °C</span>
                <i className="ms-1 fs-6 bi bi-thermometer-half text-secondary"></i>
              </div>
              <div className="d-flex align-items-center">
                <span>{dev.hum.toFixed(1)} %</span>
                <i className="ms-1 fs-6 bi bi-droplet-half text-secondary"></i>
              </div>
              <div className="d-flex align-items-center">
                <span>{dev.hum.toFixed(1)} %</span>
                <i className="ms-1 fs-6 bi bi-battery-half text-secondary"></i>
              </div>
            </div>
            <span
              style={{
                position: "absolute",
                fontSize: "x-small",
                color: "var(--bs-secondary)",
                left: x,
                ...textStyle,
              }}
            >
              {dev.dis_sensor_id}
            </span>
          </div>
        );
      })}
    </div>
  );
}
