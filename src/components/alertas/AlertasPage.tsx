import React from "react";
import { AlertaAPIType } from "../../api/alertas-api";

interface Props {
  alertaList: AlertaAPIType[];
}
export default function AlertasPage(props: Props) {
  return (
    <table className="table" style={{ fontSize: "small" }}>
      <thead>
        <tr>
          <th className="px-4">Area</th>
          <th className="px-4">Dispositivo</th>
          <th className="px-4">Fecha/Hora</th>
          <th className="px-4">Temp./Humed.</th>
          <th className="px-4">Motivo</th>
          <th className="px-4">Ultimo cambio</th>
          <th className="px-4">Estado</th>
        </tr>
      </thead>
      <tbody className="text-dark text-opacity-75">
        {props.alertaList.map((alerta) => (
          <tr key={alerta.alert_id}>
            <td className="px-4">{alerta.alert_area}</td>
            <td className="px-4">{alerta.alert_sensor_nom}</td>
            <td className="px-4">
              {alerta.alert_fecha} / {alerta.alert_hora}
            </td>
            <td className="px-4">
              {alerta.alert_temp} / {alerta.alert_hum}
            </td>
            <td className="px-4">{alerta.alert_tipo}</td>
            <td className="px-4">{alerta.alert_last_up}</td>
            <td className="px-4">
              {alerta.alert_status === "activo" ? (
                <span className="text-danger">ACTIVO</span>
              ) : (
                <span className=" text-primary">SOLUCIONADO</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
