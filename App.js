import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reached to JS Engine) - Babel
// JSX => Babel transpiled it to React.createElement => React Element (JS Object) => HTMLElement(render)

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Mindful React from JSX 🚀
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
