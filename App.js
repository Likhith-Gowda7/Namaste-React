import React from "react";
import ReactDOM from "react-dom/client";

//React Component
const JsxHeading = function () {
  return <h1 id="heading">Namste from React JSX</h1>;
};

// Component Composition
const HeadingComponent = () => (
  <div id="container">
    <JsxHeading />
    <h1 className="heading">Namste from React Functional Component</h1>
  </div>
);

// JSX is transpiled before it reaches JS by Parcel and Babel

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
