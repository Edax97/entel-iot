import React from "react";
import { ReporteRowType } from "../../api-state/useReporteAPI";

interface Props {
  headers: ReporteRowType;
  pageReporte: ReporteRowType[];
}
export default function ReporteTable(props: Props) {
  return (
    <table className="table" style={{ fontSize: "small" }}>
      <thead>
        <tr>
          {Object.values(props.headers).map((h) => (
            <th key={h} className="px-3">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-dark text-opacity-75">
        {props.pageReporte.map((r) => (
          <tr key={r.fecha}>
            {Object.keys(props.headers).map((k) => (
              <td className="px-3" key={k}>
                {r[k]
                  ? r[k]
                      .replace("Â", "")
                      .split("C")
                      .map((l, i) => (
                        <div key={l}>
                          {i === 0 && k !== "fecha" ? `${l}C` : l}
                        </div>
                      ))
                  : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
