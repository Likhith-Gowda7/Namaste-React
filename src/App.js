import React from "react";
import ReactDOM from "react-dom/client";
import HeadComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";

const AppComponent = () => {
  return (
    <div className="app">
      <HeadComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
