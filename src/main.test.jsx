import { render } from "@testing-library/react";
import App from "./App.jsx";

// Import jsdom and set up a fake document object
import { JSDOM } from "jsdom";
const { window } = new JSDOM("<!doctype html><html><body></body></html>");
global.window = window;
global.document = window.document;

test("Auth environment variables are defined", () => {
  const auth_domain = import.meta.env.VITE_AUTH_DOMAIN;
  const auth_clientId = import.meta.env.VITE_AUTH_CLIENT_ID;

  expect(auth_domain).toBeDefined();
  expect(auth_clientId).toBeDefined();
});

test("Auth environment variables are not empty", () => {
  const auth_domain = import.meta.env.VITE_AUTH_DOMAIN;
  const auth_clientId = import.meta.env.VITE_AUTH_CLIENT_ID;

  expect(auth_domain.length).toBeGreaterThan(0);
  expect(auth_clientId.length).toBeGreaterThan(0);
});

// vi.mock("./utils/OktaProvider", () => ({
//   providerConfig: {
//     domain: "mocked_domain",
//     clientId: "mocked_clientId",
//     onRedirectCallback: vi.fn(),
//     authorizationParams: {
//       redirect_uri: "mocked_redirect_uri",
//     },
//   },
// }));

test("App renders without crashing", () => {
  const { container } = render(<App />);

  expect(container.innerHTML).not.toBe("");
});
