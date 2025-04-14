import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLELement(render)

// React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Mindful React from JSX 🚀
  </h1>
);

// React component
const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="head">Mindful React Functional Component 🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
