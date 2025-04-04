/**
 * ReactElement is an Object => which convert the object into an HTML tag which the Browser's understand
 * ReactElement(Object) => HTML(Browser Understand)
 */
// React.createElement is a JS object
const parent = React.createElement(
    "customTag", // which element/tag to be created? Can be anything
    { id: "parent" }, // setting attributes to the element created
    [ // nested siblings element in an array
        React.createElement("div", { id: "child", key: "child1" }, React.createElement("h1", { key: "key1" }, "I am a child1 h1 tag!")),
        React.createElement("div", { id: "child2", key:"child2" }, [
            React.createElement("h1", { key: "key1" }, "I am a child2 h1 tag!"),
            React.createElement("h2", { key: "key2" }, "I am a child2 h2 tag under same child node!"),
        ]),
    ]
);

console.log(parent) // view React.createElement JS object structure

const root = ReactDOM.createRoot(document.getElementById("root"));

// this overwrite's the complete `#root` tag ccontent
root.render(parent);
