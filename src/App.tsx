import "./App.scss";
import MyRoutes from "./routers/routes";
import React, { useEffect } from "react";
import { useAppStore } from "./store/store";
import { useNavigate } from "react-router-dom";
// import SignIn from './components/Signin';

function App() {
  const isLogged = useAppStore((state) => state.isLogged);

  const navigate = useNavigate();

  const getUser = useAppStore((state) => state.getUser);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate("/escritorio");
      return;
    }
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  return <MyRoutes />;
}

export default App;
