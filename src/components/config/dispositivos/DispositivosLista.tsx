import React, { useCallback, useEffect, useState } from "react";
import { DispositivoAPIType } from "../../../api/dispositivos-api";
import InputSm from "../../common/forms/InputSm";

interface Props {
  dispositivoLista: DispositivoAPIType[];
  onEdit: (d: DispositivoAPIType) => void;
}
export default function DispositivosLista(props: Props) {
  const [disLista, setDisLista] = useState<DispositivoAPIType[]>([]);

  useEffect(() => {
    setDisLista(props.dispositivoLista);
  }, [props.dispositivoLista]);

  const updateDispositivos = useCallback(
    (id: number, key: string, value: string) => {
      //Validation
      if (value.length > 50 || value.length === 0) return;
      setDisLista((devices) =>
        devices.map((d) => {
          if (d.dis_id !== id) return d;
          return { ...d, [key]: value };
        })
      );
    },
    []
  );

  return (
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
        {disLista.map((dis) => (
          <tr key={dis.dis_id}>
            <td className="px-3">{dis.dis_nom}</td>
            <td className="px-3">{dis.loc_nom}</td>
            <td className="px-3">
              <InputSm
                value={dis.dis_maxt}
                onChange={(e) =>
                  updateDispositivos(dis.dis_id, "dis_maxt", e.target.value)
                }
                required
              />
            </td>
            <td className="px-3">
              <InputSm
                value={dis.dis_mint}
                onChange={(e) =>
                  updateDispositivos(dis.dis_id, "dis_mint", e.target.value)
                }
                required
              />
            </td>
            <td className="px-3">
              <InputSm
                value={dis.dis_maxh}
                onChange={(e) =>
                  updateDispositivos(dis.dis_id, "dis_maxh", e.target.value)
                }
                required
              />
            </td>
            <td className="px-3">
              <InputSm
                value={dis.dis_minh}
                onChange={(e) =>
                  updateDispositivos(dis.dis_id, "dis_minh", e.target.value)
                }
                required
              />
            </td>
            <td className="px-3">
              <select
                className="form-select form-select-sm bg-light bg-opacity-10 text-opacity-75 text-dark "
                style={{ width: "6.7rem" }}
                onChange={(e) =>
                  updateDispositivos(dis.dis_id, "dis_status", e.target.value)
                }
                value={dis.dis_status}
              >
                <option value="activo">activo</option>
                <option value="inactivo">inactivo</option>
              </select>
            </td>
            <td className="px-3">
              <select
                className="form-select form-select-sm bg-light bg-opacity-10 text-opacity-75 text-dark"
                style={{ width: "6.7rem" }}
                onChange={(e) =>
                  updateDispositivos(dis.dis_id, "dis_status", e.target.value)
                }
                value={dis.dis_status}
              >
                <option value="activo">activo</option>
                <option value="inactivo">inactivo</option>
              </select>
            </td>
            <td className="px-3">
              <button
                className="btn btn-outline-info btn-sm"
                onClick={() => props.onEdit(dis)}
              >
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
