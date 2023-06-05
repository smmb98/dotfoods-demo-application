import { useEffect, useState } from "react";

export function AzureKeyVault() {
  useEffect(() => {
    document.title = "Azure Key Vault Demo Page"; // Set the desired title
  }, []);

  return <h1>AzureKeyVault PAGE</h1>;
}
