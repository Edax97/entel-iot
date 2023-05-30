import React, { useEffect } from "react";
import CameraListContainer from "../components/cameras/cameras/CameraListContainer";
import ResumenContainer from "../components/cameras/resumen/ResumenContainer";
import { useAppStore } from "../store/store";

export default function Escritorio() {
  const id = useAppStore((state) => state.user?.id);
  const getResumen = useAppStore((state) => state.getResumen);
  const getCameras = useAppStore((state) => state.getCameras);

  useEffect(() => {
    getResumen(`${id}`);
    getCameras(`${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid py-4 py-lg-5 px-lg-5">
      <div>
        <ResumenContainer />
      </div>
      <div className="mt-4">
        <CameraListContainer />
      </div>
    </div>
  );
}
