import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopBarContainer from "../components/topbar/TopBarContainer";
import "./layout.scss";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <main>
      <TopBarContainer />
      <div className={sidebarOpen ? "sidebarState active" : "sidebarState"}>
        <div
          className="header-below bg-primary"
          style={{
            minHeight: "800px",
          }}
        >
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <Outlet />
      </div>
    </main>
  );
}
