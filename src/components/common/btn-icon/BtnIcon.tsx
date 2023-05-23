import React from "react";
import "./btn-icon.css";

export default function BtnIcon(props: any) {
  const { className, children, ...btnProps } = props;
  return (
    <button className={`btn-icon btn-sm  ${className}`} {...btnProps}>
      <div
        className={`icon-container d-flex align-items-center justify-content-center`}
      >
        {children}
      </div>
    </button>
  );
}
