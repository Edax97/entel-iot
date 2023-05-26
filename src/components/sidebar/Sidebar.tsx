import React from "react";
import "./Sidebar.scss";
//import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (a: any) => void;
  onLogout?: () => void;
}
function Sidebar(props: Props) {
  const { sidebarOpen, setSidebarOpen } = props;

  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`Container bg-primary ${sidebarOpen && "px-2"}`}>
      <button
        className="Sidebarbutton bg-dark text-white"
        onClick={ModSidebaropen}
      >
        <i
          className={`bi bi-chevron-double-${
            sidebarOpen ? "left" : "right"
          } fs-6`}
        ></i>
      </button>
      {linksArray.map(({ icon, label, to }) => (
        <div className="px-3 py-3" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              `link d-flex gap-3 align-items-center ${isActive ? `active` : ``}`
            }
          >
            <div className="fs-4">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <div className="px-3 py-3">
        <div
          className="d-flex gap-3 align-items-center link"
          onClick={props.onLogout}
        >
          <i className="bi bi-box-arrow-right fs-4"></i>
          {sidebarOpen && <span>Salir</span>}
        </div>
      </div>
      <div className="Divider"></div>
    </div>
  );
}

const linksArray = [
  {
    label: "Escritorio",
    icon: <i className="bi bi-display"></i>,
    to: "/escritorio",
  },
  /*  {
    label: "Reservorios",
    icon: <i className="bi bi-water"></i>,
    to: "/reservorios",
  }, */
  {
    label: "Configuracion",
    icon: <i className="bi bi-gear"></i>,
    to: "/configuracion",
  },
  {
    label: "Reportes",
    icon: <i className="bi bi-receipt-cutoff"></i>,
    to: "/reportes",
  },
  {
    label: "Graficas",
    icon: <i className="bi bi-bar-chart-fill"></i>,
    to: "/graficas",
  },
  {
    label: "Alertas",
    icon: <i className="bi bi-exclamation-triangle"></i>,
    to: "/alertas",
  },
];

export default Sidebar;
