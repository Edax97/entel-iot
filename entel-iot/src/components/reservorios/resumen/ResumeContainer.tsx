import React, { useMemo } from "react";
import Alerts from "./Alerts";
import Devices from "./Devices";

export default function ResumeContainer() {
  const devices = useMemo(() => 3, []);
  const alerts = useMemo(() => 1, []);
  return (
    <div className="d-flex flex-row flex-xl-column gap-4">
      <div style={{ width: "300px" }}>
        <Devices devices={devices} />
      </div>
      <div style={{ width: "300px" }}>
        <Alerts alerts={alerts} />
      </div>
    </div>
  );
}
