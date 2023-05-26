import React from "react";
import { useAppStore } from "../../../store/store";
import Loading from "../../common/loading/Loading";
import ErrorMessage from "../../common/message/ErrorMessage";
import CameraDevices from "./CameraDevices";
import CameraOneDevice from "./CameraOneDevice";

export default function CameraListContainer() {
  const cameraList = useAppStore((state) => state.cameras);
  const loading = useAppStore((state) => state.camerasLoading);
  const error = useAppStore((state) => state.camerasError);

  if (loading) return <Loading className="my-5" />;
  if (error) return <ErrorMessage message="Error al cargar la data." />;
  return (
    <div className="row gy-4 ">
      {cameraList.map((camera) => (
        <div
          key={camera.loc_id}
          className={`col-12 ${
            camera.loc_devices.length === 1 ? "col-xl-6" : "col-xl-6"
          }`}
        >
          {camera.loc_devices.length === 1 ? (
            <CameraOneDevice
              cameraName={camera.loc_nombre}
              device={camera.loc_devices[0]}
            />
          ) : (
            <CameraDevices
              cameraName={camera.loc_nombre}
              deviceList={camera.loc_devices}
            />
          )}
        </div>
      ))}
    </div>
  );
}
