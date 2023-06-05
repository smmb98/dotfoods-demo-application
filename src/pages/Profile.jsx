import { useEffect, useState } from "react";

export function Profile() {
  useEffect(() => {
    document.title = "User Profile Page"; // Set the desired title
  }, []);

  return <h1>Profile PAGE</h1>;
}
