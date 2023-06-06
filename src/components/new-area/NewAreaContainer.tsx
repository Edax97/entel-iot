import React from "react";
import CardWidget from "../common/card-widget/CardWidget";
import NewArea from "./NewArea";

export default function NewAreaContainer() {
  return (
    <CardWidget title="Guardar área" toolbar={true}>
      <div className="p-4">
        <NewArea onSave={() => null} saveLoading={false} />
      </div>
    </CardWidget>
  );
}
