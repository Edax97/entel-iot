import React from "react";
import "./btn-icon.css";

export default function BtnIcon(props: any) {
  const { className, children, ...btnProps } = props;
  return (
    <div className={`${className} icon-container `}>
      <button
        className="btn-icon btn-sm d-flex align-items-center justify-content-center"
        {...btnProps}
      >
        {children}
      </button>
    </div>
  );
}
