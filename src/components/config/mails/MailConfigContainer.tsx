import React, { useCallback, useState } from "react";
import { useAppStore } from "../../../store/store";
import Loading from "../../common/loading/Loading";
import ErrorMessage from "../../common/message/ErrorMessage";
import MailConfig from "./MailConfig";

export default function MailConfigContainer() {
  const getLoading = useAppStore((state) => state.mailsLoading);
  const getError = useAppStore((state) => state.mailsError);

  const addMail = useAppStore((state) => state.addMail);
  const onAddMail = useCallback(
    (nombre: string, email: string) => addMail(nombre, email, "5"),
    [addMail]
  );
  const addLoading = useAppStore((state) => state.addMailLoading);
  const addSuccess = useAppStore((state) => state.addMailSuccess);

  const deleteMail = useAppStore((state) => state.deleteMail);
  const onDeleteMail = useCallback(
    (id: string) => deleteMail(id),
    [deleteMail]
  );
  const deleteLoading = useAppStore((state) => state.deleteMailLoading);

  const mailList = useAppStore((state) => state.mailList);

  const [correoName, setCorreoName] = useState("");
  const [correoEmail, setCorreoEmail] = useState("");

  if (getLoading) return <Loading className="my-5 py-2" />;
  if (getError) return <ErrorMessage message="Error al cargar data." />;
  return (
    <MailConfig
      correoEmail={correoEmail}
      setCorreoEmail={setCorreoEmail}
      correoName={correoName}
      setCorreoName={setCorreoName}
      mailList={mailList}
      onAddMail={onAddMail}
      addLoading={addLoading}
      addSuccess={addSuccess}
      onDeleteMail={onDeleteMail}
      deleteLoading={deleteLoading}
    />
  );
}
