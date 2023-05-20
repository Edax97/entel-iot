import React, { useMemo } from "react";
import { ReactComponent as WaterTank } from "../../../assets/water-tank.svg";
import { ReactComponent as WaterTop } from "../../../assets/water-top.svg";

interface Props {
  width: number;
  height: number;
  ps: number;
  filled: number;
  nivel: number;
  volumen: number;
}

export default function ReservorioDiagram(props: Props) {
  const [pb, lh, lowLevel] = [55, 25, 65];

  const filled = useMemo(() => {
    if (props.filled < 0) return 0;
    if (props.filled > 1) return 1;
    return props.filled;
  }, [props.filled]);

  const tankHeight = props.height;
  const tankWidth = (props.height * 134) / 186;

  const waterHeight = lowLevel + filled * (tankHeight - lowLevel - 5);

  return (
    <svg width={props.width} height={props.height}>
      <g>
        <svg
          x={props.ps + 1}
          y={tankHeight - waterHeight}
          height={waterHeight - 1}
          width={tankWidth - 2}
        >
          <WaterTop
            width={"100%"}
            height={(tankWidth * 16) / 130}
            x={0}
            y={0}
          />
          <rect
            fill="#6786D8"
            height={waterHeight - 6}
            width={"100%"}
            x={0}
            y={5}
          />
          <animate
            attributeName="y"
            values={`${tankHeight};${tankHeight - waterHeight}`}
            dur="2s"
          />
          <animate
            attributeName="height"
            values={`${-1}};${waterHeight - 1}`}
            dur="2s"
          />
        </svg>

        <WaterTank
          height={tankHeight}
          width={tankWidth}
          x={props.ps}
          y={0}
          stroke="red"
        />
        <text
          x={props.ps + tankWidth / 2}
          y={tankHeight - pb}
          className=""
          textAnchor="middle"
          dominantBaseline="hanging"
          fontSize={18}
          fill="rgba(255,255,255,1)"
        >
          {props.nivel} m
        </text>
        <text
          x={props.ps + tankWidth / 2}
          y={tankHeight - pb + lh}
          textAnchor="middle"
          dominantBaseline="hanging"
          fontSize={16}
          fill="rgba(255,255,255,0.7)"
        >
          {props.volumen} m³
        </text>
      </g>
    </svg>
  );
}
