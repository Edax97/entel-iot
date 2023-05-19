import React from "react";
import Select from "react-select";
import BtnIcon from "../../common/btn-icon/BtnIcon";

/*Props: options: {value, label}[] instalValue instalLabel onSelect(value)  onReload*/
export default function ConfigBar({
  options,
  instalValue,
  instalLabel,
  onSelect,
  onReload,
}) {
  return (
    <div className=" d-flex gap-3 align-items-center">
      <span className="fs-5">{instalLabel}</span>
      <span className="ms-auto" style={{ fontSize: "small" }}>
        <Select
          options={options}
          onChange={(v) => onSelect(v)}
          value={instalValue}
        />
      </span>
      <span>
        <BtnIcon className="bg-primary">
          <i
            className="bi bi-arrow-clockwise text-white fs-6"
            onClick={onReload}
          ></i>
        </BtnIcon>
      </span>
    </div>
  );
}
