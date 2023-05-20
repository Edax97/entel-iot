import React from "react";

interface Props {
  message: string;
}
export default function SuccessMessage(props: Props) {
  return (
    <div className="alert alert-success alert-dismissible">
      {props.message}
      <button className="btn-close btn-sm" data-bs-dismiss="alert"></button>
    </div>
  );
}
