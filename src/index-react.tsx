import React from "react";
import ReactDOM from "react-dom";
import { App, AppConfigProvider } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <AppConfigProvider
      appConfig={{
        firebaseConfig: {
          options: {
            projectId: "cdp-asheville-ektqmrjs",
          },
          settings: {},
        },
        municipality: {
          name: "Asheville",
          timeZone: "America/New_York",
          footerLinksSections: [],
        },
      }}
    >
      <App />
    </AppConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
