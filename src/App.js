import React, { useState } from "react";
import "./App.css";
import "tippy.js/dist/tippy.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/User/Login";
import PrivateComponent from "./Common/PrivateComponent";
import { FeedBackFormL1L2 } from "./Components/ComponentsL1L2/FeedBackFormL1L2";
import Alert from "./Common/Alert";
import ReportsL1L2 from "./Components/ComponentsL1L2/ReportsL1L2";
import Admin from "./Components/Admin/Admin";
import ComponentL3 from "./Components/ComponentsL3/ComponentL3";
import StatusReportsL1L2 from "./Components/ComponentsL1L2/StatusReportsL1L2";
import AlertModal from "./Common/AlertModal";
import StatusReportsL3 from "./Components/ComponentsL3/StatusReportsL3";
import RedirectionHomePage from "./Common/RedirectionHomePage";
import YourProductsCart from "./Components/ComponentsL3/YourProductsCart";
import PhysicalL1L2 from "./Components/ComponentsL1L2/PhysicalL1L2";
import PhysicalL3 from "./Components/ComponentsL3/PhysicalL3";
import CancelDataReport from "./Components/ComponentsL3/CancelDataReport";

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
              element={<PhysicalL1L2 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/direction/home"
              element={<RedirectionHomePage showAlert={showAlert} />}
            />
            {/* L3 COMPONENTS */}
            <Route
              path="/Indent-express/L3/digital/home"
              element={<ComponentL3 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L3/status/reports"
              element={<StatusReportsL3 showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L3/your/cart/reports"
              element={<YourProductsCart showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L3/cancel/item/list"
              element={<CancelDataReport showAlert={showAlert} />}
            />
            <Route
              path="/Indent-express/L3/physical/home"
              element={<PhysicalL3 showAlert={showAlert} />}
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
