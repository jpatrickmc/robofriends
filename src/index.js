import React from "react"; //view library
import ReactDOM from "react-dom/client"; //connects react to the browser DOM
import "./index.css";
import Hello from "./Hello";
import "tachyons"; //css library
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hello greeting={"Hello React Ninja"} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
