import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet
      contentSecurityPolicy="
        default-src 'self';
        script-src 'self' 'unsafe-inline';
        style-src 'self' 'unsafe-inline';
        img-src 'self' data:;"
    />
    <Helmet permissionsHeader="geolocation=(), microphone=()" />
    <Helmet referrerPolicy="policy 'strict-origin'" />
    <Helmet xContentTypeOption="X-Content-Type-Options 'nosniff'" />
    <Helmet xFrameOption="X-Frame-Options 'sameorigin'" />
    <Helmet strictTransportSecurity="Strict-Transport-Security 'max-age=31536000'" />
    <App />
  </React.StrictMode>
);

reportWebVitals();
