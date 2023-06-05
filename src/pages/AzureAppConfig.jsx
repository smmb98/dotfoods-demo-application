import { useEffect, useState } from "react";

export function AzureAppConfig() {
  useEffect(() => {
    document.title = "Azure App Config Demo Page"; // Set the desired title
  }, []);
  return <h1>AzureAppConfig PAGE</h1>;
}
