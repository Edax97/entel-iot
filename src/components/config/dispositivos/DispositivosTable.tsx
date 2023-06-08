import { MUIDataTableProps } from "mui-datatables";
import React, { useCallback, useEffect, useState } from "react";
import { DispositivoAPIType } from "../../../api/dispositivos-api";
import InputSm from "../../common/forms/InputSm";
import MUITable from "../../common/table/MUITable";
interface Props {
  dispositivoLista: DispositivoAPIType[];
  onEdit: (d: DispositivoAPIType) => void;
  editLoading: boolean;
}
export default function DispositivosTable(props: Props) {
  const [dispositivosLista, setDispositivosLista] = useState<
    DispositivoAPIType[]
  >([]);

  useEffect(() => {
    setDispositivosLista(props.dispositivoLista);
  }, [props.dispositivoLista]);

  const updateDispositivos = useCallback(
    (id: number, key: string, value: string) => {
      //Validation
      if (value.length > 50 || value.length === 0) return;
      setDispositivosLista((devices) =>
        devices.map((d) => {
          if (d.dis_id !== id) return d;
          return { ...d, [key]: value };
        })
      );
    },
    []
  );

  const dispositivoColumns: MUIDataTableProps["columns"] = [
    { name: "dis_nom", label: "Nombre / ID" },
    { name: "loc_nom", label: "Área" },
    {
      name: "dis_maxt",
      label: "Temp. Máx. °C",
      options: {
        customBodyRenderLite: (i, j) => {
          const dis = dispositivosLista[j];
          return (
            <InputSm
              value={dis.dis_maxt}
              onChange={(e) =>
                updateDispositivos(dis.dis_id, "dis_maxt", e.target.value)
              }
              required
            />
          );
        },
      },
    },
    { name: "dis_mint", label: "Temp. Mín. °C" },
    { name: "dis_maxh", label: "Hume. Máx. %" },
    { name: "dis_minh", label: "Hume. Mín. %" },
    { name: "dis_status", label: "Status" },
    { name: "dis_status", label: "Batería" },
    { name: "dis_nom", label: "Acción" },
  ];

  return (
    <MUITable title="" columns={dispositivoColumns} data={dispositivosLista} />
  );
}
