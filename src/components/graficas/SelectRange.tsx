import { DatePicker } from "react-date-picker";
import React from "react";
import Select, { SingleValue } from "react-select";
import "./select-range-component.scss";
import { SinceType } from "./SelectRangeContainer";
import { Value } from "react-date-picker/dist/cjs/shared/types";
import { RangeT } from "../../store/AreaGraficaProvider";

interface Props {
  tempRange: RangeT;
  sinceSelected: SinceType;
  sinceOptions: SinceType[];
  validationError: boolean;

  setStartDate: (d: Value) => any;
  setEndDate: (d: Value) => any;
  selectSince: (v: SingleValue<SinceType>) => any;
  onFilter: () => any;
}
export default function SelectRange(props: Props) {
  if (!props.tempRange) return null;
  return (
    <div className="">
      <div className="d-flex align-items-center flex-wrap gap-3">
        <div className="d-flex align-items-center">
          <span className="opacity-75">Desde:</span>
          <DatePicker
            value={props.tempRange[0]}
            onChange={props.setStartDate}
            clearIcon={null}
            locale="es-ES"
            maxDate={new Date()}
            className="ms-2 text-dark text-opacity-50"
          />
        </div>
        <div className="d-flex align-items-center">
          <span className="opacity-75">Hasta:</span>
          <DatePicker
            value={props.tempRange[1]}
            onChange={props.setEndDate}
            clearIcon={null}
            locale="es-ES"
            maxDate={new Date()}
            className="ms-2 text-dark text-opacity-50"
          />
        </div>

        <Select
          options={props.sinceOptions}
          value={props.sinceSelected}
          onChange={props.selectSince}
          className="text-dark text-opacity-75 select-input"
          classNames={{
            option: (state) =>
              state.isSelected
                ? "bg-primary"
                : state.isFocused
                ? "bg-primary bg-opacity-25"
                : "",
          }}
        />
        <button
          className="ms-1 btn btn-primary text-white"
          onClick={props.onFilter}
        >
          Filtrar
        </button>
      </div>
      {props.validationError && (
        <div className="mt-3 alert alert-danger py-2">
          Ingrese un rango temporal válido
        </div>
      )}
    </div>
  );
}
