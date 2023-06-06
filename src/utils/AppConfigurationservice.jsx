import { AppConfigurationClient } from "@azure/app-configuration";

const connectionString = import.meta.env.VITE_APP_CONFIGURATION_STRING;
const client = new AppConfigurationClient(connectionString);
export default client;
