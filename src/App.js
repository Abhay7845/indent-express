/** @format */

import React, { useState } from "react";
import "./App.css";
import "tippy.js/dist/tippy.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/User/Login";
import PrivateComponent from "./Common/PrivateComponent";
import { FeedBackFormL1L2 } from "./Components/ComponentsL1L2/FeedBackFormL1L2";
import Alert from "./Common/Alert";
import ReportsL1L2 from "./Components/ComponentsL1L2/ReportsL1L2";
import StatusReportsL1L2 from "./Components/ComponentsL1L2/StatusReportsL1L2";
import AlertModal from "./Common/AlertModal";
import StatusReportsL3 from "./Components/ComponentsL3/StatusReportsL3";
import RedirectionHomePage from "./Common/RedirectionHomePage";
import YourProductsCart from "./Components/ComponentsL3/YourProductsCart";
import PhysicalL1L2 from "./Components/ComponentsL1L2/PhysicalL1L2";
import PhysicalL3 from "./Components/ComponentsL3/PhysicalL3";
import CancelDataReport from "./Components/ComponentsL3/CancelDataReport";
import CategoryTypeL3 from "./Components/ComponentsL3/CategoryTypeL3";
import DigitalL3 from "./Components/ComponentsL3/DigitalL3";
import AdminHome from "./Components/Admin/AdminHome";
import MasterFileUplaod from "./Components/Admin/MasterFileUplaod";
import UpdatePortalStatus from "./Components/Admin/UpdatePortalStatus";
import GetMasterSKU from "./Components/Admin/GetMasterSKU";
import LoginCredentials from "./Components/Admin/LoginCredentials";
import DayEndReport from "./Components/Admin/DayEndReport";
import UpdateAutomail from "./Components/Admin/UpdateAutomail";

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
    <div>
      <BrowserRouter>
        <Alert alert={alert} />
        <AlertModal alert={alert} />
        <Routes>
          <Route
            index
            path='/IndentExpress'
            element={<Login showAlert={showAlert} />}
          />
          <Route element={<PrivateComponent />}>
            {/* L1L2 COMPONENTS */}
            <Route
              path='/Indent-express/feedback/L1/L2'
              element={<FeedBackFormL1L2 showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/L1/L2/products/reports'
              element={<ReportsL1L2 showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/L1/L2/status/reports'
              element={<StatusReportsL1L2 showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/L1/L2/physical/home'
              element={<PhysicalL1L2 showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/direction/home'
              element={<RedirectionHomePage showAlert={showAlert} />}
            />
            {/* L3 COMPONENTS */}
            <Route
              path='/Indent-express/L3/digital/home'
              element={<DigitalL3 showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/L3/status/reports'
              element={<StatusReportsL3 showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/L3/your/cart/reports'
              element={<YourProductsCart showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/L3/cancel/item/list'
              element={<CancelDataReport showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/L3/physical/home'
              element={<PhysicalL3 showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/L3/digital/:categoryType'
              element={<CategoryTypeL3 showAlert={showAlert} />}
            />
            {/* ADMIN COMPONENTS */}
            <Route
              path='/Indent-express/admin/home'
              element={<AdminHome showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/admin/master/file/upload'
              element={<MasterFileUplaod showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/admin/update/tortal/status'
              element={<UpdatePortalStatus showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/admin/get/master/sku'
              element={<GetMasterSKU showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/admin/login/credentials'
              element={<LoginCredentials showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/admin/day/end/report'
              element={<DayEndReport showAlert={showAlert} />}
            />
            <Route
              path='/Indent-express/admin/update/automail'
              element={<UpdateAutomail showAlert={showAlert} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
