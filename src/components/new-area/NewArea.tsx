import React, { FormEvent, useCallback } from "react";

interface Props {
  onSave: () => any;
  saveLoading: boolean;
}
export default function NewArea(props: Props) {
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //validation
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="opacity-50">Datos</div>
      <div className="d-flex">
        <div className="opacity-75">Nombre:</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="opacity-50 mt-4">Control</div>
    </form>
  );
}
