/**
 * <div id="parent">
 *  <div id="child">
 *    <h1></h1>
 *    <h1></h1>
 *  </div>
 *  <div id="child2">
 *    <h1></h1>
 *    <h1></h1>
 *  </div>
 * </div>
 *
 * ReactElement is an Object => which convert the object into an HTML tag which the Browser's understand
 * ReactElement(Object) => HTML(Browser Understand)
 */
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child", key: "child1" }, [
        React.createElement("h1", { key: "key1" }, "I am a h1 tag!"),
        React.createElement(
            "h2",
            { key: "key2" },
            "I am a h2 tag under same child node!"
        ),
    ]),
    React.createElement("div", { id: "child2", key:"child2" }, [
        React.createElement("h1", { key: "key1" }, "I am a h1 tag!"),
        React.createElement(
            "h2",
            { key: "key2" },
            "I am a h2 tag under same child node!"
        ),
    ]),
]);

console.log(parent); // object

// JSX?

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
