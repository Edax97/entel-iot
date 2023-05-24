import React, { useEffect } from "react";
import CameraListContainer from "../components/cameras/cameras/CameraListContainer";
import ResumenContainer from "../components/cameras/resumen/ResumenContainer";
import { useAppStore } from "../store/store";

export default function Escritorio() {
  const getResumen = useAppStore((state) => state.getResumen);
  const getCameras = useAppStore((state) => state.getCameras);

  useEffect(() => {
    getResumen();
    getCameras("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container my-5">
      <div>
        <ResumenContainer />
      </div>
      <div className="mt-4">
        <CameraListContainer />
      </div>
    </div>
  );
}
