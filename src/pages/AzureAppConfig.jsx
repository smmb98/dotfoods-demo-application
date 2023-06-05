import { useEffect, useState } from "react";
import client from "../../config";
import { CenterFocusStrong } from "@mui/icons-material";

export function AzureAppConfig() {
  useEffect(() => {
    document.title = "Azure App Config Demo Page"; // Set the desired title
  }, []);
  const [settingValue, setSettingValue] = useState(null);
  const [settingColor, setSettingColor] = useState("Black");

  const fetchConfiguration = async () => {
    try {
      const setting = await client.getConfigurationSetting({
        key: "testing",
      });
      setSettingValue(setting.value);
    } catch (error) {
      console.error("Error fetching configuration:", error);
    }

    try {
      const setting = await client.getConfigurationSetting({
        key: "color",
      });
      setSettingColor(setting.value);
    } catch (error) {
      console.error("Error fetching configuration:", error);
    }
  };
  return (
    <div>
      <h1 style={{ color: settingColor }} >Azure App Configuration Demo</h1>
      {settingValue ? (
        <p>Setting value: {settingValue}</p>
      ) : (
        <p>To load setting values, press the button...</p>
      )}
      <h2 style={{ color: settingColor }}>Lets see if this works</h2>
      <button onClick={fetchConfiguration}>Fetch Configuration</button>
    </div>
  );
}
