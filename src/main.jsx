import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Register the service worker. The virtual module is provided
// automatically by the vite-plugin-pwa during development and build.
import { registerSW } from "virtual:pwa-register";

// Immediately register the service worker on page load.
registerSW({ immediate: true });

// Render the root application. React StrictMode helps highlight potential
// problems in an application by intentionally invoking certain
// lifecycle methods multiple times during development.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);