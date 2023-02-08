import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InputProvider } from "./contexts/input.context";
import { UserDataProvider } from "./contexts/userData.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserDataProvider>
      <InputProvider>
        <App />
      </InputProvider>
    </UserDataProvider>
  </React.StrictMode>
);
