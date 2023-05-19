import React from "react";

interface Props {
  title: any;
  toolbar: any;
  children: any;
  className: string;
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
        {title}
        <span className="ms-auto d-flex gap-3">{toolbar}</span>
      </div>
      {children}
    </div>
  );
}
