import React, { useCallback, useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { RangeT, useAreaGraficaContext } from "../../store/AreaGraficaProvider";
import { moverFecha } from "../../utilities/date-utils";
import SelectRange from "./SelectRange";

export type SinceType = { value: number; label: string };
export type RangeType = { startDate: Date; endDate: Date } | null;
const sinceOptions: SinceType[] = [
  { value: 3, label: "3 días" },
  { value: 7, label: "7 días" },
  { value: 14, label: "14 días" },
  { value: 30, label: "30 días" },
  { value: 60, label: "60 días" },
];

export default function SelectRangeContainer() {
  const { timeRange, updateTimeRange } = useAreaGraficaContext();

  const [tempRange, setTempRange] = useState<RangeT>(null);
  const [sinceSelected, setSinceSelected] = useState<SinceType>({
    value: 0,
    label: "Intervalo de ...",
  });
  const [validationError, setValidationError] = useState(false);

  useEffect(() => {
    updateTimeRange([moverFecha(new Date(), -14), new Date()]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTempRange(timeRange);
  }, [timeRange]);

  const setStartDate = (startDate: any) => {
    if (!tempRange || !startDate) return;
    setValidationError(false);
    setTempRange([startDate, tempRange[1]]);
  };
  const setEndDate = (endDate: any) => {
    if (!tempRange || !endDate) return;
    setValidationError(false);
    setTempRange([tempRange[0], endDate]);
  };
  const selectSince = useCallback((v: SingleValue<SinceType>) => {
    if (!v) return;
    setSinceSelected(v);
    setTempRange([moverFecha(new Date(), -v.value), new Date()]);
    setValidationError(false);
  }, []);

  const onFilter = useCallback(() => {
    if (!tempRange) return;
    if (tempRange[0] > tempRange[1]) {
      setValidationError(true);
      return;
    }
    updateTimeRange(tempRange);
  }, [tempRange, updateTimeRange]);

  return (
    <SelectRange
      tempRange={tempRange}
      sinceSelected={sinceSelected}
      sinceOptions={sinceOptions}
      validationError={validationError}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      selectSince={selectSince}
      onFilter={onFilter}
    />
  );
}
