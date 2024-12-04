import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "../src/app/index.js";
import { Provider } from "react-redux";
import ThemeContext from "./context/themeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="691960834558-fjgeld42vs0m8vjcq10najreg08cki37.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
    </ThemeContext>
  </React.StrictMode>
);
