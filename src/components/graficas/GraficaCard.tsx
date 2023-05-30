import React from "react";
import { useAreaGraficaContext } from "../../store/AreaGraficaProvider";
import BtnIcon from "../common/btn-icon/BtnIcon";
import CardWidget from "../common/card-widget/CardWidget";
import AreaGraficaContainer from "./AreaGraficaContainer";
import { FaExpand as Expand } from "react-icons/fa";
import { SlOptions as Options } from "react-icons/sl";
import DisposAreaContainer from "../disp-area/DisposAreaContainer";
import AreaValuesContainer from "../disp-area/AreaValuesContainer";

export default function GraficaCard() {
  const { currentArea } = useAreaGraficaContext();

  if (!currentArea) return null;
  return (
    <CardWidget
      title={currentArea.name}
      toolbar={
        <>
          <BtnIcon>
            <Expand className="fs-6 text-secondary" />
          </BtnIcon>
          <BtnIcon>
            <Options className="fs-6 text-secondary" />
          </BtnIcon>
        </>
      }
    >
      <div className="p-4 row gx-5">
        <div className="col-12 col-lg-7">
          <AreaGraficaContainer />
        </div>
        <div className="col-12 col-lg-5">
          <DisposAreaContainer />
          <div className="pt-5 pb-4">
            <AreaValuesContainer />
          </div>
        </div>
      </div>
    </CardWidget>
  );
}
