import React from "react"; //view library
import ReactDOM from "react-dom/client"; //connects react to the browser DOM
import "./index.css";
import "tachyons"; //css library
import reportWebVitals from "./reportWebVitals";
import CardList from "./CardList";
import { robots } from "./robots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
