import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./App";
import { ThemeProvider } from "./context/ThemeContext";

// Apply initial theme immediately to prevent flash
(function initTheme() {
  document.documentElement.classList.add('dark');
})();

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <HelmetProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}
