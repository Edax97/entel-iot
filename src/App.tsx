import "./App.scss";
import MyRoutes from "./routers/routes";
import { BrowserRouter } from "react-router-dom";
import React from "react";
// import SignIn from './components/Signin';

function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
