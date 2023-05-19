import "./App.scss";
import MyRoutes from "./routers/routes";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import React, { useState } from "react";
// import SignIn from './components/Signin';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      {/* <SignIn /> */}
      <BrowserRouter>
        <div>
          <main
            className={sidebarOpen ? "sidebarState active" : "sidebarState"}
          >
            <div
              className="header-below"
              style={{
                backgroundColor: "rgb(31, 30, 119)",
                minHeight: "800px",
              }}
            >
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </div>
            <MyRoutes />
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
