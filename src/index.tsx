import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import "@fontsource/roboto";
import "@fontsource/ubuntu";
import { Helmet, HelmetProvider } from "react-helmet-async";
import jhLabsLogo from "./app/assets/img/jhLabs.png";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <HelmetProvider>
        <Helmet>
          <title>Jarrett Huang's Web Labs</title>
          <meta name="theme-color" content="#071419" />
          <meta property="og:image" content={jhLabsLogo} />
        </Helmet>
        <App />
      </HelmetProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
