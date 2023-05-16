import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import PrivateComponent from "./Common/PrivateComponent";
import { FeedBackFormL1L2 } from "./Components/ComponentsL1L2/FeedBackFormL1L2";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/Indent-express/login" element={<Login />} />
          <Route element={<PrivateComponent />}>
            <Route
              path="/Indent-express/feedback/L1/L2"
              element={<FeedBackFormL1L2 />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
