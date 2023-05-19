import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
      <main className={sidebarOpen ? "sidebarState active" : "sidebarState"}>
        <div
          className="header-below"
          style={{
            backgroundColor: "rgb(31, 30, 119)",
            minHeight: "800px",
          }}
        >
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <Outlet />
      </main>
    </div>
  );
}
