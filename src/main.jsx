import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./i18n.jsx";
import { RouterProvider } from "./router.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </LanguageProvider>
  </StrictMode>
);
