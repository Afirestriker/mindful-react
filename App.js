import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Mindful React from JSX 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
