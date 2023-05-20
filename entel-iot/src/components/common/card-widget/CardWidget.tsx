import React, { ReactNode } from "react";

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
      className={`${
        className || "bg-secondary bg-opacity-10"
      }  card border-0 shadow  `}
      {...restProps}
    >
      <div className="d-flex px-3 pt-2">
        <span className=" text-opacity-75">{title}</span>
        <span className="ms-auto d-flex gap-3 align-items-center">
          {toolbar}
        </span>
      </div>
      {children}
    </div>
  );
}
