import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

// import { NavBar } from "./components/NavBar.jsx";
NavBar;
import { Home } from "./pages/Home";
import { AzureAppConfig } from "./pages/AzureAppConfig";
import { AzureKeyVault } from "./pages/AzureKeyVault";
import { Profile } from "./pages/Profile";
import { TriggerReports } from "./pages/TriggerReports";
import { NavBar } from "./components/navbar";
import Container from "@mui/material/Container";

function App() {
  const { user, isAuthenticated, loginWithRedirect, isLoading, error } =
    useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  console.log(isAuthenticated);
  if (!isAuthenticated && !isLoading) {
    loginWithRedirect();
  }

  if (isAuthenticated && !isLoading) {
    console.log(user);
    return (
      <>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="md">
          <Routes>
            <Route index element={<Home />} />
            <Route path="AzureAppConfig" element={<AzureAppConfig />} />
            <Route path="AzureKeyVault" element={<AzureKeyVault />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="TriggerReports" element={<TriggerReports />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </>
    );
  }
}

export default App;
