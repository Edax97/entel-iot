import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { moverFecha } from "../utilities/date-utils";

export type RangeT = [Date, Date] | null;
interface AreaT {
  id: string;
  name: string;
}
interface AreaGraficaContextT {
  timeRange: RangeT;
  currentArea: AreaT | null;
  setTimeRange: Dispatch<SetStateAction<RangeT>>;
  setCurrentArea: Dispatch<SetStateAction<AreaT | null>>;
}

const AreaGraficaContext = createContext<AreaGraficaContextT>(null!);

export const useAreaGraficaContext = () => useContext(AreaGraficaContext);

interface Props {
  children: ReactNode;
}
export default function AreaGraficaProvider({ children }: Props) {
  const [timeRange, setTimeRange] = useState<RangeT>([
    new Date(),
    moverFecha(new Date(), -14),
  ]);
  const [currentArea, setCurrentArea] = useState<AreaT | null>(null);

  return (
    <AreaGraficaContext.Provider
      value={{ timeRange, setTimeRange, currentArea, setCurrentArea }}
    >
      {children}
    </AreaGraficaContext.Provider>
  );
}
