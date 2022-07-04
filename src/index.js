import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { ContextProvider } from "./contexs/ContextProvider";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <ContextProvider>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </ContextProvider>
  
// );

ReactDOM.render(
  // <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  // </React.StrictMode>
  ,
  document.getElementById('root'),
);
