import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child", key: "child1" }, React.createElement("h1", { key: "key1" }, "Hello From Mindful React 🚀")),
        React.createElement("div", { id: "child2", key:"child2" }, React.createElement('h2', {key: 'author'}, 'By Ashish Agrawal')),
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
