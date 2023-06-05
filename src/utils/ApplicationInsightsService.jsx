import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

const connectionString = import.meta.env
  .VITE_AZURE_APPINSIGHTS_CONNECTION_STRING;

if (!connectionString || connectionString.length === 0) {
  throw new Error(`Missing App Insight's environment variable`);
}

const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    connectionString: connectionString,
    extensions: [reactPlugin],
    extensionConfig: {},
    enableAutoRouteTracking: true,
    disableAjaxTracking: false,
    autoTrackPageVisitTime: true,
    // enableCorsCorrelation: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true,
  },
});
appInsights.loadAppInsights();

appInsights.addTelemetryInitializer((env) => {
  env.tags = env.tags || [];
  env.tags["ai.cloud.role"] = "testTag";
});

export { reactPlugin, appInsights };
