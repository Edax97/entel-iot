import React, { useEffect } from "react";
import AreasContainer from "../components/config/areas/AreasContainer";
import DispositivosContainer from "../components/config/dispositivos/DispositivosContainer";
import MailConfigContainer from "../components/config/mails/MailConfigContainer";
import { useAppStore } from "../store/store";

export default function Configuracion() {
  const getMails = useAppStore((state) => state.getMails);

  useEffect(() => {
    getMails("5");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid my-5 px-4">
      <div>
        <MailConfigContainer />
      </div>
      <div className="mt-4">
        <DispositivosContainer />
      </div>
      <div className="mt-4">
        <AreasContainer />
      </div>
    </div>
  );
}
