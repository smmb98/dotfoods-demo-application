import history from "./history";

const auth_domain = import.meta.env.VITE_AUTH_DOMAIN;
const auth_clientId = import.meta.env.VITE_AUTH_CLIENT_ID;

if (
  !auth_domain ||
  auth_domain.length === 0 ||
  !auth_clientId ||
  auth_clientId.length === 0
) {
  throw new Error(`Missing Auth's environment variables`);
}

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
  },
};

export { providerConfig };
