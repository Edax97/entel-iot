import React, { useEffect } from "react";
import MailConfigContainer from "../components/config/mails/MailConfigContainer";
import { useAppStore } from "../store/store";

export default function Configuracion() {
  const getMails = useAppStore((state) => state.getMails);

  useEffect(() => {
    getMails("5");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container my-5">
      <div>
        <MailConfigContainer />
      </div>
      <div className="mt-4">CONFIG DISPOSITIVOS</div>
      <div className="mt-4">CONFIG AREAS</div>
    </div>
  );
}
