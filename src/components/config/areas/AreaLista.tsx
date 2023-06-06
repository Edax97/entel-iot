import React from "react";
import { CameraAPIType } from "../../../api/cameras-api";
import AreaRow from "./AreaRow";

interface Props {
  areaLista: CameraAPIType[];
  onEdit: (a: CameraAPIType) => void;
  editLoading: boolean;
}
export default function AreaLista(props: Props) {
  return (
    <div className="table-responsive">
      <table className="table" style={{ fontSize: "small" }}>
        <thead>
          <tr>
            <th className="px-3" rowSpan={2}>
              Nombre
            </th>
            <th className="px-3" rowSpan={2}>
              Descripción
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
              Conexión del gateway
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
          {props.areaLista.map((area) => (
            <AreaRow
              onEdit={props.onEdit}
              area={area}
              key={area.loc_id}
              editLoading={props.editLoading}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
