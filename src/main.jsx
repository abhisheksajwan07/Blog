import { StrictMode } from "react";
import {UserContextProvider} from "./Utils/UserContext.jsx"
import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
