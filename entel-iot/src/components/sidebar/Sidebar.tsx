import React from "react";
import "./Sidebar.css";
//import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: any;
}
function Sidebar(props: Props) {
  const { sidebarOpen, setSidebarOpen } = props;
  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="Container">
      <button className="Sidebarbutton" onClick={ModSidebaropen}>
        <i className="bi bi-arrow-left-circle-fill"></i>
      </button>
      <div className="Logocontent">
        <div className="imgcontent">
          <img
            src={""}
            style={{ marginLeft: "20px", height: "1.75rem", marginTop: "-8px" }}
            alt=""
          />
        </div>
      </div>
      {linksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <div className="Divider"></div>
      {secondarylinksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <div className="Divider"></div>
    </div>
  );
}

const linksArray = [
  {
    label: "Escritorio",
    icon: <i className="bi bi-house-dash-fill"></i>,
    to: "/escritorio",
  },
  {
    label: "Reservorios",
    icon: <i className="bi bi-water"></i>,
    to: "/reservorios",
  },
  {
    label: "Configuracion",
    icon: <i className="bi bi-gear-wide-connected"></i>,
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

const secondarylinksArray = [
  {
    label: "Logout",
    icon: <i className="bi bi-box-arrow-right"></i>,
    to: "/logout",
  },
];

export default Sidebar;
