import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import PrivateComponent from "./Common/PrivateComponent";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/Indent-express/login" element={<Login />} />
          <Route element={<PrivateComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
