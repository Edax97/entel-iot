import React from "react";
import CameraListContainer from "../components/cameras/cameras/CameraListContainer";
import ResumenContainer from "../components/cameras/resumen/ResumenContainer";

export default function Escritorio() {
  return (
    <div className="container-fluid py-4 px-lg-5">
      <div>
        <ResumenContainer />
      </div>
      <div className="mt-4">
        <CameraListContainer />
      </div>
    </div>
  );
}
