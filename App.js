import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="heading"> Mindful React 🚀 </h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2 className="sub-head">
      Component Composition - Functional Component 🚀
    </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
