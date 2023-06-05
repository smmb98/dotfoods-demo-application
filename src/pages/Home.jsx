import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export function Home() {
  useEffect(() => {
    document.title = "Demo App Home Page"; // Set the desired title
  }, []);

  const { user } = useAuth0();
  // return <h1>HOME PAGE</h1>;
  return (
    <>
      {/* <Container maxWidth="sm"> */}
      <header>
        <h1>
          Welcome, {user.given_name} {user.family_name}!
        </h1>
      </header>
      <main>
        <section>
          <h2>A Demo App</h2>
          <p>
            This is a demo React App which will show you the usage of Okta Auth0
            and Azure services which are as follows:
          </p>
        </section>
        <section>
          <h3>Okta Authentication</h3>
          <p>
            Enable secure and seamless user authentication and authorization
            using Okta's identity management service.
          </p>
          <p>
            Learn more about Okta Authentication{" "}
            <a href="https://www.okta.com/authentication/">here</a>.
          </p>
        </section>
        <section>
          <h3>Azure Application Insights Report Generator</h3>
          <p>
            Analyze and monitor the performance and usage of your application
            with powerful reporting capabilities provided by Azure Application
            Insights.
          </p>
          <p>
            Learn more about Azure Application Insights{" "}
            <a href="https://azure.microsoft.com/services/application-insights/">
              here
            </a>
            .
          </p>
        </section>
        <section>
          <h3>Azure App Configuration</h3>
          <p>
            Manage and centralize your application settings and feature flags
            using Azure App Configuration to enable dynamic configuration
            updates.
          </p>
          <p>
            Learn more about Azure App Configuration{" "}
            <a href="https://azure.microsoft.com/services/app-configuration/">
              here
            </a>
            .
          </p>
        </section>{" "}
        <section>
          <h3>Azure Key Vault</h3>
          <p>
            Securely store and manage cryptographic keys, secrets, and
            certificates used by your applications and services.
          </p>
          <p>
            Learn more about Azure Key Vault{" "}
            <a href="https://azure.microsoft.com/services/key-vault/">here</a>.
          </p>
        </section>
      </main>
      {/* </Container> */}
    </>
  );
}
