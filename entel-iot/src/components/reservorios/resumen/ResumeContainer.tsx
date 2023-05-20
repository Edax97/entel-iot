import React, { useMemo } from "react";
import Alerts from "./Alerts";
import Devices from "./Devices";

export default function ResumeContainer() {
  const devices = useMemo(() => 3, []);
  const alerts = useMemo(() => 1, []);
  return (
    <div className="row gy-4">
      <div className="col-6 col-xl-12">
        <Devices devices={devices} />
      </div>
      <div className="col-6 col-xl-12">
        <Alerts alerts={alerts} />
      </div>
    </div>
  );
}
