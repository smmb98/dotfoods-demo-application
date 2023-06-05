import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { providerConfig } from "./utils/OktaProvider.jsx";
import { reactPlugin } from "./utils/ApplicationInsightsService";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppInsightsContext.Provider value={reactPlugin}>
      <Auth0Provider {...providerConfig}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </AppInsightsContext.Provider>
  </React.StrictMode>
);
