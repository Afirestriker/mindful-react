# React: Theory Assignment

## Ch04 - Talk is cheap, show me the code

### Q: Is `JSX` mandatory for React?

A: No, `JSX` is not mandatory for React

- JSX is a syntactical sugar to `React.createElement()` function. The recommended and widely used way of defining the structure of your user interfaces when working with React
- JSX at the end is compiled/transpiled to React.createElement().

While JSX is not mandatory, it is highly recommended for most React development because it provides a more natural and expressive way to define the structure of your components and is widely adopted by the React community. JSX is also the approach you will find in most React documentation and tutorials.

Here's an example of creating a React component and element without JSX:

```js
const element = React.createElement('h1', null, 'Hello, React without JSX!');

class App extends React.Component {
  render() {
    return React.createElement('div', null, element);
  }
}
```

Here's an example of creating a React component and element using JSX:

```js
const element = <h1>Hello, React with JSX!</h1>;

class App extends React.Component {
  render() {
    return <div>{element}</div>;
  }
}
```

---

### Q: Is `ES6` mandatory for React?

A: No, `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6.
However, using ES6 or a more recent version of JavaScript has several advantages:

- `Enhanced Syntax` - ES6 introduces many features and syntactical improvements that make our code more concise and readable. Features like `arrow functions`, `template literals`, `destructuring`, and `classes` can significantly improve our code quality and maintainability.

- `Module System` - ES6 introduced a standardized module system, allowing us to use `import` and `export` statements for better code organization and dependency management in React applications.

- `Arrow Functions` - Arrow functions provide a more concise way to define functions, and they have lexical scoping, making it easier to work with this in React components.

- `Class Syntax` - ES6 class syntax is commonly used for defining React components, providing a clear and more structured way to create components.

- `Default Parameters` - ES6 allows us to set default parameter values for function arguments, which can make our code more robust.

- `Spread and Rest Operators` - These operators are useful for working with arrays and objects, which are common in React applications.

- `Template Literals` - Template literals provide a more convenient way to work with strings.

---

### Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element. The `{}` can embed a javascript expression or a variable or React element inside it.

- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.

- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

Example

```js
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

---

### Q: How can I write `comments` in JSX?

A: JSX comments are written as follows:

- `{/*  */}` - for single or multiline comments

```js
{/* A JSX comment */}
{/*
  Multi
  line
  JSX
  comment
*/}
```

---

### Q: What is `<React.Fragment></React.Fragment>` and `<></>`?

A: `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.

```js
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```

---

### Q: What is `Reconciliation` in React?

A: `Reconciliation` in React refers to the process by which React updates the DOM (Document Object Model) to match the most recent state of the application. React uses a virtual representation of the DOM called the "Virtual DOM" to efficiently update the actual DOM.
Reconciliation is the algorithmic process of comparing the previous virtual DOM with the current one and making the necessary changes to bring the actual DOM in sync with the application's state.

Here's how the reconciliation process works in React

1. `Render Phase` - During the render phase, React creates a virtual representation of the component tree. This virtual tree is called the Virtual DOM. React elements are created for each component and its children, representing the component's structure and content.

2. `Reconciliation Phase` - When there's a change in the component's state or props, a new virtual tree is created. React then performs a process called `reconciliation` to compare the new virtual tree with the previous one.
   1. React uses a `diffing algorithm` to identify the differences (or "diffs") between the new and previous virtual trees.
   2. It determines which parts of the virtual tree need to be updated in the actual DOM to reflect the changes in the component's state or props.
   3. React aims to minimize the number of actual DOM operations to make the update as efficient as possible.

3. `Commit Phase` - After identifying the differences in the virtual tree, React applies the necessary changes to the actual DOM. This is called the `commit phase`. During this phase, React updates the DOM to reflect the changes in the virtual tree. The updates are batched and performed efficiently to minimize browser repaints and reflows.

`Reconciliation` is a critical aspect of React's performance optimization

---

### Q: What is `React Fiber`?

A: `React Fiber`, often referred to simply as `Fiber` is an re-implementation of the React reconciliation algorithm.

React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:

- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance

---

### Q: Why do we need `keys` in React?

A: In React, the key prop is used to help React identify and differentiate between elements in a collection, such as when rendering a list of components or elements. `Keys` are essential for efficient and reliable rendering, and they serve several important purposes:

- `Performance` - React uses keys to optimize the update process. When a component in a collection is modified, React can use the keys to identify exactly which item changed. This enables React to update only the changed component in the virtual DOM and minimize the number of DOM manipulations required, which significantly improves performance.

- `Preventing Reordering` - Keys ensure that the order of elements in a collection remains consistent. Without keys, React may not be able to distinguish between elements effectively, leading to unintended reordering when elements are added, removed, or modified. Keys help maintain the desired order of elements.

- `Maintaining Component State` - When we have stateful components in a list, using keys is crucial. Without keys, the component instances may not be properly reused or preserved when the list changes, potentially leading to unexpected behavior and the loss of component state.

- `Accessibility` - When dealing with lists or collections of elements, having unique and consistent keys can improve the accessibility of our application. It helps screen readers and assistive technologies provide a more meaningful experience to users.

- `Child Component Identity` - In some cases, we may need to interact with child components directly. Keys provide a way to reference and interact with specific child components within a parent component.

However, it's important to note that keys should be unique among siblings but don't necessarily have to be globally unique. React uses keys to establish a relationship between the virtual DOM elements and the actual DOM elements. As such, keys are primarily used within the scope of the parent component to identify its children.

When choosing keys, it's a good practice to use stable and unique identifiers for elements, such as database IDs, UUIDs, or indices, depending on your data source. Avoid using random or non-unique values as keys, as they can lead to unexpected rendering behavior and performance issues.

```js
<li key={0}>HTML</li>
<li key={1}>CSS</li>
<li key={2}>JavaScript</li>
<li key={3}>React</li>
```

---

### Q: Can we use the `index as keys` in React?

A: Yes, we can use the `index as keys` in React, but it should be done with caution and only in specific situations where we are certain that the list of items in your component is `static and won't change`. Using the index as keys can have limitations and potential issues, so it's important to understand when it's appropriate and when it's not.

Here are some key points to consider when using the index as keys:

- `Static Lists` - The index can be used as a key when rendering a `static list of items`, where the order and the items themselves won't change. If our list is dynamic and items can be added, removed, or reordered, using the index as keys is not recommended, as it can lead to unexpected rendering issues.

- `Performance` - Using the index as keys is less efficient in terms of performance, especially when elements can be added or removed from the list. `React may not be able to distinguish between items effectively`, leading to unnecessary re-renders and potentially impacting the performance of our application.

- `Stable and Unique` - If we decide to use the index as keys, ensure that the list order remains stable. Any change in the list order can lead to incorrect rendering. Additionally, it's essential to use unique keys for each item in the list, as duplicate keys can lead to issues.

In general, it's a better practice to use stable and unique identifiers as keys whenever possible. For dynamic lists of items fetched from a database or an external data source, it's recommended to use unique IDs associated with each item. If you don't have access to unique IDs, consider generating unique keys based on the content of the items or using other methods to ensure that keys are both stable and unique.

While using the index as keys can be a quick solution for simple and static lists, it's crucial to be aware of its limitations and potential issues in more complex and dynamic scenarios. Always consider the specific requirements and characteristics of our application when deciding on the appropriate keying strategy.

---

### Q: What is `props in React`?

A: In React, `props (short for properties)` is a mechanism for passing data from a parent component to a child component.

React functional component is simply a normal JavaScript functions, and like function accepts argumetns, React component accepts props. `Passing a props to a component is just like passing an argument to a function.`

They allow us to make our React components dynamic and reusable by providing a way to configure and customize their behavior. Props are read-only, meaning that a child component cannot modify the props it receives from a parent.

To pass props to a child component, you can use the following methods:

1 `Inline Props (JSX Attribute)` - We can pass props directly in our JSX when rendering a child component. For example, if you have a name prop, we can pass it like this:

```js
<ChildComponent name="John" />
```

2 `Using Variables` - We can pass JavaScript variables as props to a child component.
For example:

```js
const name = "John";
<ChildComponent name={name} />
```

3 `Dynamic Props` - We can pass dynamic values or the result of expressions as props. For instance, we can pass the result of a function:

```js
<ChildComponent greeting={`Hello, ${getName()}`} />

/* Here, getName() is a function that returns a name. */
```

4 `Spread Attributes` - If you have an object with properties that you want to pass as props, you can use the spread operator (...) to pass all properties of the object as individual props:

```js
const person = { name: "John", age: 30 };
<ChildComponent {...person} />
```

In the ChildComponent, we can access **name** and **age** as individual props.

In the child component, we can access these props using the props object. For example, in the ChildComponent, you can access the name prop as `props.name`.

---

### Q: What is `Config Driven UI`?

A: A `Config-Driven UI` (or `Configuration-Driven User Interface`) is an approach to building user interfaces where the structure, behavior, and appearance of the UI components are primarily determined by configuration data or settings, rather than hardcoding these details in the source code. This approach aims to make the user interface more flexible, customizable, and easily maintainable by separating the UI logic from the UI configuration.

Key aspects of a `Config-Driven UI` include:

- `Configuration Data` - The UI components are driven by external configuration files or data, often in a structured format such as JSON, XML, YAML, or other custom formats. These configuration files define properties, layouts, styles, and even interactivity of UI elements.

- `Dynamic UI Generation` - The UI components are generated and structured at runtime based on the provided configuration data. This allows for dynamic and flexible UI construction, making it easier to adapt to changes or customization requests.

- `Customization` - Users or administrators can adjust the behavior and appearance of the UI without changing the underlying code. This is often achieved by modifying the configuration data, making it possible to tailor the UI to specific needs.

- `Consistency and Reusability` - A configuration-driven approach promotes consistency across the UI by enforcing a standardized configuration schema. Reusable components and templates can be designed and shared across the application, leading to a more maintainable codebase.

- `Rapid Development` - Config-driven UIs can accelerate development, as UI components can be designed and customized through configuration, reducing the need for extensive coding. This is particularly useful in situations where the UI needs to evolve quickly.

- `Cross-Platform and Cross-Browser Compatibility` - A well-designed config-driven approach can help manage differences in UI rendering across different platforms and web browsers, as configuration data can be adjusted as needed for each platform or browser.

- `Config-Driven UIs are commonly used in various contexts, including`:

- `Content Management Systems (CMS)` - CMS platforms often allow users to define the structure and content of web pages through a configuration-driven approach.

- `eCommerce Platforms` - Online stores often rely on configuration data to specify product catalogs, pricing, and promotional banners.

- `Data Visualization` - Charting libraries may allow users to configure and customize chart elements via a configuration object.

- `Business Applications`: Enterprise software often uses config-driven UIs to define forms, workflows, and dashboards that can be customized by administrators.

The exact implementation of a config-driven UI can vary depending on the technology and tools being used. In web development, this approach is often combined with front-end frameworks or libraries to render the UI based on the provided configuration. It provides the flexibility needed to create highly adaptable and user-customizable interfaces.

Example:

- Offers in the Delivery apps differ from city to city where offer data come from a database.
- Restaurants in the Delivery apps differ from city to city where offer data comes from a database.
