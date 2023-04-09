import React from 'react';
import "./Sidebar.css";
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Sidebar({ sidebarOpen, setSidebarOpen }) {

  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="Container" isOpen ={sidebarOpen}>
        <button className="Sidebarbutton" onClick={ModSidebaropen}>       
          <i className="bi bi-arrow-left-circle-fill"></i>                   
        </button>        
        <div className="Logocontent">
            <div className="imgcontent">
                <img src={logo} style={{marginLeft: "20px", height: "1.75rem", marginTop: "-8px"}} />
            </div>
            <h2></h2>            
        </div>
        {linksArray.map(({icon, label, to}) =>(
          <div className="LinkContainer" key={label}>
            <NavLink to={to} className={({isActive}) =>`Links${isActive?` active`:``}`}>
              <div className="Linkicon">
                {icon}
              </div>
              {
                sidebarOpen &&(
                  <span>{label}</span>
                )
              }
            </NavLink>
          </div>
        ))}
        <div className="Divider"></div>
        {secondarylinksArray.map(({icon, label, to}) =>(
          <div className="LinkContainer" key={label}>
            <NavLink to={to} className={({isActive}) =>`Links${isActive?` active`:``}`}>
              <div className="Linkicon">
                {icon}
              </div>
              {
                sidebarOpen &&(
                  <span>{label}</span>
                )
              }
            </NavLink>
          </div>
        ))}
        <div className="Divider"></div>        
    </div>
    
  )
}

const linksArray = [
  {
    label: "Escritorio",
    icon: <i className="bi bi-house-dash-fill"></i>,
    to: "/escritorio"
  },
  {
    label: "Configuracion",
    icon: <i className="bi bi-gear-wide-connected"></i>,
    to: "/configuracion"
  },
  {
    label: "Reportes",
    icon: <i className="bi bi-receipt-cutoff"></i>,
    to: "/reportes"
  },
  {
    label: "Graficas",
    icon: <i className="bi bi-bar-chart-fill"></i>,
    to: "/graficas"
  },
  {
    label: "Alertas",
    icon: <i className="bi bi-exclamation-octagon-fill"></i>,
    to: "/alertas"
  },
]

const secondarylinksArray = [  

  {
    label: "Logout",
    icon: <i className="bi bi-box-arrow-right"></i>,
    to: "/logout"
  },
]

 export default Sidebar;