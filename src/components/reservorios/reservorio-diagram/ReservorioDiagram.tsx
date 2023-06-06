import React, { useMemo } from "react";
import { ReactComponent as WaterTop } from "../../../assets/water-top.svg";

interface Props {
  width: number;
  height: number;
  filled: number;
  nivel: number;
  volumen: number;
  inRange: boolean;
}

const bgBlue = "#6786D8";

export default function ReservorioDiagram(props: Props) {
  const [lowLevel] = [0];

  const filled = useMemo(() => {
    if (props.filled < 0) return 0;
    if (props.filled > 1) return 1;
    return props.filled;
  }, [props.filled]);

  const tankHeight = props.height;
  const tankWidth = props.width;

  const waterHeight = lowLevel + filled * (tankHeight - lowLevel - 5);

  const waterOffset = 12;

  return (
    <div className="position-relative">
      <div className="border border-secondary border-4 border-top-0">
        <svg width={props.width} height={props.height}>
          <g>
            <svg
              x={0}
              y={tankHeight - waterHeight}
              height={waterHeight}
              width={tankWidth}
            >
              <WaterTop
                width={tankWidth + 10}
                height={((tankWidth + 10) * 17) / 130}
                x={-5}
                y={0}
              />
              <rect
                fill={bgBlue}
                height={waterHeight - waterOffset}
                width={"100%"}
                x={0}
                y={waterOffset}
              />
              <animate
                attributeName="y"
                values={`${tankHeight};${tankHeight - waterHeight}`}
                dur="2s"
              />
              <animate
                attributeName="height"
                values={`${0};${waterHeight}`}
                dur="2s"
              />
            </svg>
          </g>
        </svg>
      </div>

      <div className="mt-2 text-center">
        <div
          style={{ fontSize: 18 }}
          className={props.inRange ? "" : "text-danger"}
        >
          {props.nivel} m
        </div>
        <div className="text-secondary">{props.volumen} m³</div>
      </div>
    </div>
  );
}
