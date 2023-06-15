import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/User/Login";
import "./App.css";
import PrivateComponent from "./Common/PrivateComponent";
import { FeedBackFormL1L2 } from "./Components/ComponentsL1L2/FeedBackFormL1L2";
import Alert from "./Common/Alert";
import ReportsL1L2 from "./Components/ComponentsL1L2/ReportsL1L2";
import Admin from "./Components/Admin/Admin";
import ComponentL3 from "./Components/ComponentsL3/ComponentL3";
import StatusReportsL1L2 from "./Components/ComponentsL1L2/StatusReportsL1L2";
import AlertModal from "./Common/AlertModal";
import StatusReportsL3 from "./Components/ComponentsL3/StatusReportsL3";
import PhysicalAndDigital from "./Components/ComponentsL1L2/PhysicalL1L2";
import DigitalL1L2 from "./Components/ComponentsL1L2/DigitalL1L2";
import RedirectionHomePage from "./Components/ComponentsL1L2/RedirectionHomePage";
import YourProductsCart from "./Components/ComponentsL3/YourProductsCart";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <BrowserRouter>
        <Alert alert={alert} />
        <AlertModal alert={alert} />
        <Routes>
          <Route
            index
            path="/IndentExpress"
            element={<Login showAlert={showAlert} />}
          />
          <Route element={<PrivateComponent />}>
            {/* L1L2 COMPONENTS */}
            <Route
              path="/Indent-express/feedback/L1/L2"
              element={<FeedBackFormL1L2 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L1/L2/products/reports"
              element={<ReportsL1L2 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L1/L2/status/reports"
              element={<StatusReportsL1L2 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L1/L2/physical/home"
              element={<PhysicalAndDigital showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L1/L2/digital/home"
              element={<DigitalL1L2 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/direction/home"
              element={<RedirectionHomePage showAlert={showAlert} />}
            />
            {/* L3 COMPONENTS */}
            <Route
              path="/Indent-express/L3/home"
              element={<ComponentL3 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L3/status/reports"
              element={<StatusReportsL3 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L3/yor/cart/reports"
              element={<YourProductsCart showAlert={showAlert} />}
            />
            {/* ADMIN COMPONENTS */}
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
