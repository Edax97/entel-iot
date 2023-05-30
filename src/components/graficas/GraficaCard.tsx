import React from "react";
import CardWidget from "../common/card-widget/CardWidget";
import GraficaContainer from "./GraficaContainer";

export default function GraficaCard() {
  return (
    <CardWidget title="">
      <div className="p-4">
        <GraficaContainer />
      </div>
    </CardWidget>
  );
}
