import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";

const auth_domain = import.meta.env.VITE_AUTH_DOMAIN;
const auth_clientId = import.meta.env.VITE_AUTH_CLIENT_ID;
// const auth_audience = import.meta.env.VITE_AUTH_AUDIENCE;

if (
  !auth_domain ||
  auth_domain.length === 0 ||
  !auth_clientId ||
  auth_clientId.length === 0
  // !auth_audience ||
  // auth_audience.length === 0
) {
  throw new Error(`Missing environment variables`);
}

// console.log(import.meta.env); // Check if environment variables are printed correctly

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
  domain: auth_domain,
  clientId: auth_clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    // audience: auth_audience,
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
