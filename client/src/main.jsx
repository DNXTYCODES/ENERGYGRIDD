import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-y7agkmqetvk26r0j.us.auth0.com"
      clientId="CPK1t6vfPt9ZIgCxMLEPjbpAhNOfYOEP"
      authorizationParams={{
        redirect_uri: "https://dnxtsolarprojecttt.onrender.com",
      }}
      audience="https://dnxtsolarprojectttbackend.onrender.com/"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
