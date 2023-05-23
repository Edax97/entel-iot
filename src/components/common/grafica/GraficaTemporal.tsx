import React from "react";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  Tooltip,
  XYChart,
  //Tooltip,
} from "@visx/xychart";

import { curveMonotoneX, timeFormat } from "d3";

export interface AccessorsType<DatumT> {
  xAccessor: (d: DatumT) => Date;
  yAccessor: (d: DatumT) => number;
}

export interface SeriesVisType<DatumT> {
  id: number;
  trama: DatumT[];
  label: string;
  showSeries: boolean;
  color: string;
}

interface Props<DatumT> {
  timeDomain: [Date, Date];
  seriesVis: SeriesVisType<DatumT>[];
  accessors: AccessorsType<DatumT>;
  unidad: string;
  width: number;
  height: number;
}

const axisColor = "rgb(85, 82, 85)";
const gridColor = "rgba(105, 102, 105, 0.3)";

export function GraficaTemporal<Datum extends {}>(props: Props<Datum>) {
  return (
    <XYChart
      resizeObserverPolyfill={ResizeObserver}
      height={props.height}
      width={props.width}
      margin={{
        top: 20,
        bottom: 20,
        right: 50,
        left: 50,
      }}
      xScale={{ type: "time", domain: props.timeDomain }}
      yScale={{ type: "linear", zero: false }}
    >
      <AnimatedAxis
        orientation="bottom"
        stroke={axisColor}
        tickStroke={axisColor}
        tickLabelProps={() => ({
          fill: axisColor,
          verticalAnchor: "middle",
          fontSize: 11,
        })}
      />
      <AnimatedAxis
        orientation="left"
        stroke={axisColor}
        tickStroke={axisColor}
        numTicks={4}
        tickLabelProps={() => ({
          fill: axisColor,
          verticalAnchor: "end",
          fontSize: 11,
        })}
        hideZero={true}
        rangePadding={{ start: 0, end: -10 }}
      />
      <AnimatedAxis
        orientation="right"
        stroke={axisColor}
        tickStroke={axisColor}
        numTicks={4}
        tickLabelProps={() => ({
          fill: axisColor,
          verticalAnchor: "end",
          fontSize: 11,
        })}
        hideZero={true}
        rangePadding={{ start: 0, end: -10 }}
      />
      <AnimatedGrid rows={false} strokeDasharray={"3 7"} stroke={gridColor} />,
      {props.seriesVis.map((serie) => {
        if (!serie.showSeries) return null;
        return (
          <>
            <AnimatedLineSeries
              curve={curveMonotoneX}
              key={serie.id}
              dataKey={`d-${serie.id}`}
              data={serie.trama}
              colorAccessor={() => serie.color}
              {...props.accessors}
            />
          </>
        );
      })}
      <Tooltip<Datum>
        renderTooltip={(tooltip) => {
          const datumBySeries = tooltip.tooltipData?.datumByKey;
          if (!datumBySeries) return null;
          return (
            <div className="p-2 fw-normal">
              {props.seriesVis.map((serie, j) => {
                const keyData = datumBySeries[`d-${serie.id}`];
                if (!keyData) return null;
                return (
                  <div key={`tt-${serie.id}`}>
                    <div className="mb-1" style={{ color: serie.color }}>
                      {`${serie.label} : ${props.accessors.yAccessor(
                        keyData.datum
                      )} ${props.unidad}`}
                    </div>
                    {j === props.seriesVis.length - 1 ? (
                      <div>
                        {timeFormat("%d-%m-%y %H:%M")(
                          props.accessors.xAccessor(keyData.datum)
                        )}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        }}
        showHorizontalCrosshair={true}
        showVerticalCrosshair={true}
        verticalCrosshairStyle={{ strokeWidth: 1 }}
        horizontalCrosshairStyle={{ strokeWidth: 1 }}
        snapTooltipToDatumX={true}
        showSeriesGlyphs={true}
        renderGlyph={(glyph) => {
          const glyphColor = props.seriesVis.find(
            (serie) => `s-${serie.id}` === glyph.key
          )?.color;

          return glyphColor ? (
            <g>
              <circle
                cx={0}
                cy={0}
                r={4}
                fill="white"
                stroke={glyphColor}
                strokeWidth={2}
              ></circle>
            </g>
          ) : null;
        }}
      />
    </XYChart>
  );
}
