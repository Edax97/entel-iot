import React, { useEffect, useMemo, useState } from "react";
import { useAreasState } from "../../api-state/useAreasState";
import { useAreaGraficaContext } from "../../store/AreaGraficaProvider";
import { useAppStore } from "../../store/store";
import SelectArea, { SelectType } from "./SelectArea";

export default function SelectAreaContainer() {
  const id = useAppStore((state) => state.user?.id);
  const { setCurrentArea } = useAreaGraficaContext();
  const { areaLista } = useAreasState(`${id}`);

  const options = useMemo<SelectType[]>(() => {
    return areaLista.map((a) => ({ value: a.loc_id, label: a.loc_nombre }));
  }, [areaLista]);

  const [selected, setSelected] = useState<SelectType | null>(null);
  useEffect(() => {
    if (!selected) return;
    setCurrentArea({ id: `${selected.value}`, name: selected.label });
  }, [selected, setCurrentArea]);

  return (
    <SelectArea selected={selected} options={options} onSelect={setSelected} />
  );
}
