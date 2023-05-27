import React, { Dispatch, FormEvent, SetStateAction } from "react";
import BtnIcon from "../../common/btn-icon/BtnIcon";
import CardWidget from "../../common/card-widget/CardWidget";
import { FaExpand as Expand } from "react-icons/fa";
import { MailAPIType } from "../../../api/mails-api";

interface Props {
  correoName: string;
  correoEmail: string;
  setCorreoName: Dispatch<SetStateAction<string>>;
  setCorreoEmail: Dispatch<SetStateAction<string>>;
  mailList: MailAPIType[];
  onAddMail: (name: string, email: string) => any;
  addLoading: boolean;
  addSuccess: boolean;
  onDeleteMail: (id: string) => any;
  deleteLoading: boolean;
}
export default function MailConfig(props: Props) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onAddMail(props.correoName, props.correoEmail);
  };

  if (props.mailList.length === 0) return null;
  return (
    <CardWidget
      title="Configuración de correos"
      toolbar={
        <>
          <BtnIcon>
            <Expand className="fs-6 text-secondary" />
          </BtnIcon>
          <BtnIcon>
            <i className="bi bi-arrow-clockwise text-secondary" />
          </BtnIcon>
        </>
      }
    >
      <div className="p-4 pb-5 d-flex gap-5">
        <form action="#" onSubmit={onSubmit}>
          <div className="text-secondary">
            Correo al que le llegará automáticamente el reporte diario.
          </div>
          <div className="mt-3">
            <input
              className="form-control bg-light bg-opacity-25"
              type="text"
              placeholder="Ingrese un nombre"
              value={props.correoName}
              onChange={(e) => props.setCorreoName(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <input
              className="form-control bg-light bg-opacity-25"
              type="email"
              placeholder="Ingrese una dirección válida"
              value={props.correoEmail}
              onChange={(e) => props.setCorreoEmail(e.target.value)}
              required
            />
          </div>
          <button className="my-3 btn btn-primary">Añadir</button>
        </form>
        <div className="ms-auto me-3">
          <table className="table" style={{ fontSize: "small" }}>
            <thead>
              <tr>
                <th className="px-4">Nombre</th>
                <th className="px-4">Correo</th>
                <th className="px-4">Acción</th>
              </tr>
            </thead>
            <tbody className="text-dark text-opacity-75">
              {props.mailList.map((mail) => (
                <tr key={mail.correo_id}>
                  <td className="px-4">{mail.correo_nombre}</td>
                  <td className="px-4">{mail.correo_email}</td>
                  <td className="px-4">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => props.onDeleteMail(`${mail.correo_id}`)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CardWidget>
  );
}
