import { useEffect, useState } from "react";
import axios from "axios";

export function AzureKeyVault() {
  useEffect(() => {
    document.title = "Azure Key Vault Demo Page"; // Set the desired title
  }, []);
  async function callFunctionApp() {
    try {
      const response = await axios.get(
        "https://vaultsecretsfetchfucntion.azurewebsites.net/api/MyFunction?code=4bhUkYk-1zw4PEq72WQpup5xAJOcgqJXGJ1hzWtY1NGhAzFuBNkSBg=="
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <h1>
      <button onClick={callFunctionApp}>Secret Value is: </button>
    </h1>
  );
}
