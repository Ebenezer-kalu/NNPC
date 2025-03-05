import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Only here
import App from "./App";
import ErrorBoundary from './ErrorBoundary';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ Wrap the entire app here */}
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
