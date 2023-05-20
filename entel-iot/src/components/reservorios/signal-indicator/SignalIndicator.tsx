import React from "react";

interface Props {
  signal: number;
}
export default function SignalIndicator(props: Props) {
  if (props.signal <= 2) {
    return <i className="bi bi-reception-2 fs-6"></i>;
  }
  if (props.signal === 3) {
    return <i className="bi bi-reception-3 fs-6"></i>;
  }
  return <i className="bi bi-reception-4 fs-6"></i>;
}
