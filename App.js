import React from "react";
import ReactDOM from "react-dom/client";

const Title= () => (
  <h1 className="head" tabIndex="1">
    Mindful React using JSX 🚀
  </h1>
);

// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="head">Mindful React Functional Component 🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
