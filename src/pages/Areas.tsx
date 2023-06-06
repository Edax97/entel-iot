import React from "react";
import AreasContainer from "../components/config/areas/AreasContainer";
import NewAreaContainer from "../components/new-area/NewAreaContainer";

export default function Areas() {
  return (
    <div
      className="container-fluid py-4 px-lg-5"
      //style={{ maxWidth: "min-content" }}
    >
      <div className="row gy-4">
        <div className="col-12 col-xxl-3">
          <NewAreaContainer />
        </div>
        <div className="col-12 col-xxl-9">
          <AreasContainer />
        </div>
      </div>
    </div>
  );
}
