import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InputProvider } from "./contexts/input.context";
import { SubRedditProvider } from "./contexts/subRedditData.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SubRedditProvider>
      <InputProvider>
        <App />
      </InputProvider>
    </SubRedditProvider>
  </React.StrictMode>
);
