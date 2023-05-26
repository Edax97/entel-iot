const mailsURL = "data-api/mail-lista";

export interface MailAPIType {
  correo_id: number;
  correo_master: string;
  correo_nombre: string;
  correo_email: string;
  correo_numero: null;
  correo_opt: number;
}

interface MailsDataType {
  status: boolean;
  totalRegistros: number;
  listaDatos: MailAPIType[];
  mensaje: string;
}

export const getMailsAPI = (codigo_m: string) =>
  fetch(`${mailsURL}-${codigo_m}.json`)
    .then<MailsDataType>((data) => data.json())
    .then(({ status, listaDatos }) => {
      if (!status) throw Error("API Error");
      return listaDatos;
    });

export const deleteMailAPI = async (id: string) => {
  const response = { respuesta: 1, mensaje: "Eliminado" };
  if (response.respuesta !== 1) throw Error("No se pudo eliminar.");
  return response;
};

export const addMailAPI = async (
  nombre: string,
  email: string,
  codigo_m: string
) => {
  const response = { respuesta: 1, mensaje: "Añadido" };
  if (response.respuesta !== 1) throw Error("No se pudo añadir.");
  const added: MailAPIType = {
    correo_id: 1,
    correo_master: codigo_m,
    correo_nombre: nombre,
    correo_email: email,
    correo_numero: null,
    correo_opt: 0,
  };
  return added;
};
