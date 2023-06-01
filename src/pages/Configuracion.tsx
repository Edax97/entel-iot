import React, { useEffect } from "react";
import AreasContainer from "../components/config/areas/AreasContainer";
import DispositivosContainer from "../components/config/dispositivos/DispositivosContainer";
import MailConfigContainer from "../components/config/mails/MailConfigContainer";
import { useAppStore } from "../store/store";

export default function Configuracion() {
  const id = useAppStore((state) => state.user?.id);
  const getMails = useAppStore((state) => state.getMails);

  useEffect(() => {
    getMails(`${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid py-4 px-4">
      <div>
        <MailConfigContainer />
      </div>
      <div className="pt-4">
        <DispositivosContainer />
      </div>
      <div className="pt-4">
        <AreasContainer />
      </div>
    </div>
  );
}
