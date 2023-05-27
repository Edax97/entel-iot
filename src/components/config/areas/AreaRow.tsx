import React, { useCallback, useEffect, useState } from "react";
import { CameraAPIType } from "../../../api/cameras-api";
import InputSm from "../../common/forms/InputSm";

interface Props {
  area: CameraAPIType;
  onEdit: (a: CameraAPIType) => void;
}
export default function AreaRow(props: Props) {
  const [area, setArea] = useState<CameraAPIType | null>(null);

  useEffect(() => {
    setArea(props.area);
  }, [props.area]);

  const updateRow = useCallback(
    (key: string, value: string) => {
      if (!area) return;
      setArea({ ...area, [key]: value });
    },
    [area]
  );

  if (!area) return null;
  return (
    <tr>
      <td className="px-3">{area.loc_nombre}</td>
      <td className="px-3">
        <textarea
          className="form-control form-control-sm bg-light bg-opacity-10 text-opacity-75 text-dark "
          rows={2}
          style={{ width: "12rem" }}
          value={area.loc_descripcion}
          onChange={(e) => updateRow("loc_descripcion", e.target.value)}
          required
        />
      </td>
      <td className="px-3">
        <InputSm
          value={area.loc_max_temp}
          onChange={(e) => updateRow("loc_max_temp", e.target.value)}
          required
        />
      </td>
      <td className="px-3">
        <InputSm
          value={area.loc_min_temp}
          onChange={(e) => updateRow("loc_min_temp", e.target.value)}
          required
        />
      </td>
      <td className="px-3">
        <InputSm
          value={area.loc_max_hume}
          onChange={(e) => updateRow("loc_max_hume", e.target.value)}
          required
        />
      </td>
      <td>
        <InputSm
          value={area.loc_min_hume}
          onChange={(e) => updateRow("loc_min_hume", e.target.value)}
          required
        />
      </td>
      <td className="px-3">
        <select
          className="form-select form-select-sm bg-light bg-opacity-10 text-opacity-75 text-dark "
          style={{ width: "6.7rem" }}
          onChange={(e) => updateRow("loc_status", e.target.value)}
          value={area.loc_status}
        >
          <option value="activo">activo</option>
          <option value="inactivo">inactivo</option>
        </select>
      </td>
      <td className="px-3">
        <select
          className="form-select form-select-sm bg-light bg-opacity-10 text-opacity-75 text-dark "
          style={{ width: "6.7rem" }}
        >
          <option value="activo">activo</option>
          <option value="inactivo">inactivo</option>
        </select>
      </td>
      <td className="px-3">
        <button
          className="btn btn-outline-info btn-sm"
          onClick={() => props.onEdit(area)}
        >
          Editar
        </button>
      </td>
    </tr>
  );
}
