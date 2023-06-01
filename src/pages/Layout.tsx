import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopBarContainer from "../components/topbar/TopBarContainer";
import { useAppStore } from "../store/store";
import "./layout.scss";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = useAppStore((state) => state.logout);

  return (
    <main>
      <TopBarContainer />
      <div className={sidebarOpen ? "sidebarState active" : "sidebarState"}>
        <div
          className="header-below bg-primary d-none"
          style={{
            minHeight: "800px",
          }}
        >
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            onLogout={() => logout()}
          />
        </div>
        <Outlet />
      </div>
    </main>
  );
}
