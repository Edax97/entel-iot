import React, { ReactNode } from "react";
import "./card-widget.scss";

interface Props {
  title?: string;
  toolbar?: ReactNode;
  children: ReactNode;
  className?: string;
}
export default function CardWidget(props: Props) {
  const { title, toolbar, children, className, ...restProps } = props;
  return (
    <div
      className={`${className || "bg-gray"}  card border-0 shadow  `}
      {...restProps}
    >
      {toolbar && (
        <div className="d-flex align-items-center ps-3 pe-2 py-1 rounded-top bg-primary text-white">
          <span className="" style={{ fontSize: "0.9rem" }}>
            {title}
          </span>
          <span className="ms-auto d-flex gap-2 align-items-center">
            {toolbar}
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
