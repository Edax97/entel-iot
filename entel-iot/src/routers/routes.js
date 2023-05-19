import React from "react";
import { Routes, Route } from "react-router-dom";
import Escritorio from "../pages/Escritorio";
import Configuracion from "../pages/Configuracion";
import Reportes from "../pages/Reportes";
import Graficas from "../pages/Graficas";
import Alertas from "../pages/Alertas";
import Reservorios from "../pages/Reservorios";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/escritorio" element={<Escritorio />}></Route>
      <Route path="/reservorios" element={<Reservorios />}></Route>

      <Route path="/configuracion" element={<Configuracion />}></Route>

      <Route path="/reportes" element={<Reportes />}></Route>

      <Route path="/graficas" element={<Graficas />}></Route>

      <Route path="/alertas" element={<Alertas />}></Route>
    </Routes>
  );
}

export default MyRoutes;
