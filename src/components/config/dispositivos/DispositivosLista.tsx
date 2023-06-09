import React from "react";
import { DispositivoAPIType } from "../../../api/dispositivos-api";
import ResponsiveContainer from "../../common/ResponsiveContainer";
import DispositivoRow from "./DispositivoRow";

interface Props {
  dispositivoLista: DispositivoAPIType[];
  onEdit: (d: DispositivoAPIType) => void;
  editLoading: boolean;
}
export default function DispositivosLista(props: Props) {
  return (
    <ResponsiveContainer>
      <table className="table" style={{ fontSize: "small" }}>
        <thead>
          <tr>
            <th className="px-3" rowSpan={2}>
              Nombre / ID
            </th>
            <th className="px-3" rowSpan={2}>
              Área
            </th>
            <th className="px-3" colSpan={2}>
              Temperatura °C
            </th>
            <th className="px-3" colSpan={2}>
              Humedad %
            </th>
            <th className="px-3" rowSpan={2}>
              Status
            </th>
            <th className="px-3" rowSpan={2}>
              Batería
            </th>
            <th className="px-3" rowSpan={2}>
              Acción
            </th>
          </tr>
          <tr>
            <th className="px-3">Max</th>
            <th className="px-3">Min</th>
            <th className="px-3">Max</th>
            <th className="px-3">Min</th>
          </tr>
        </thead>
        <tbody className="text-dark text-opacity-75">
          {props.dispositivoLista.map((dis) => (
            <DispositivoRow
              key={dis.dis_id}
              dispositivo={dis}
              onEdit={props.onEdit}
              editLoading={props.editLoading}
            />
          ))}
        </tbody>
      </table>
    </ResponsiveContainer>
  );
}
