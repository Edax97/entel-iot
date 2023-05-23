import React from "react";
import BtnIcon from "../../common/btn-icon/BtnIcon";
import CardWidget from "../../common/card-widget/CardWidget";
import { SlOptions as Options } from "react-icons/sl";
import { FaExpand as Expand } from "react-icons/fa";
import GraficoLeyendaComponent from "../../common/grafica/GraficoLeyendaComponent";
import { LevelDatumType } from "../../../store/res-graficas-store";

export default function NivelGrafica(props: any) {
  return (
    <CardWidget
      title="Evolución temporal"
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
      <div className="p-4 pb-5"></div>
    </CardWidget>
  );
}
