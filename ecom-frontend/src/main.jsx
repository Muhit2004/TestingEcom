import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ShopContextProvider from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* =========================================================================
      GLOBAL DATA INJECTION LAYER
      - Wrapping <App /> here ensures that every nested route and child component 
        can directly hook into  centralized warehouse data streams., in one word , 
        can access the  data store.
      ========================================================================= 
    */}
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
);
