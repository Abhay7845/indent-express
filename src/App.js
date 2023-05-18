import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import "./App.css";
import PrivateComponent from "./Common/PrivateComponent";
import { FeedBackFormL1L2 } from "./Components/ComponentsL1L2/FeedBackFormL1L2";
import Alert from "./Common/Alert";
import ReportsL1L2 from "./Components/ComponentsL1L2/ReportsL1L2";
import Admin from "./Components/Admin/Admin";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };
  return (
    <>
      <BrowserRouter>
        <Alert alert={alert} />
        <Routes>
          <Route
            index
            path="/Indent_Express"
            element={<Login showAlert={showAlert} />}
          />
          <Route element={<PrivateComponent />}>
            <Route
              path="/Indent-express/feedback/L1/L2"
              element={<FeedBackFormL1L2 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L1/L2/products/reports"
              element={<ReportsL1L2 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/admin"
              element={<Admin showAlert={showAlert} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
