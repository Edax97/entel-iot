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
      <div className="d-flex ps-3 pe-2 pt-2">
        <span className=" text-dark text-opacity-75 pt-2">{title}</span>
        <span className="ms-auto d-flex gap-2 align-items-center">
          {toolbar}
        </span>
      </div>
      {children}
    </div>
  );
}
