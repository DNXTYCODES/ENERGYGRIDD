import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-y7agkmqetvk26r0j.us.auth0.com"
      clientId="4TZingow2YwQRu21auLI9ThdFaZjjwi9"
      authorizationParams={{
        redirect_uri: "https://energygrid.onrender.com",
      }}
      audience="https://energygrid.onrender.com/"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
