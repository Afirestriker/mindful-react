# React: Theory Assignment

## Chapter 03 - Laying The Foundation

### Q: What is JSX?

A: JSX stands for `JavaScript XML`, It allows developers to write HTML-like code in JavaScript without writing createElement in React which makes React code more confusing and inefficient. JSX is not part of React. JSX makes it easier to add HTML in React. JSX converts HTML code into JavaScript code that React can understand and renders in the DOM. React developers prefer the conciseness of JSX.

Here's a simple example of JSX:

```js
  const element = <h1>Hello, JSX!</h1>;
```

In the above code, looks like HTML, but it's JSX. When this code is transpiled, it turns into JavaScript code that creates a React element, which can be rendered in a React application.

---

### Q: Rules of JSX

A: **1. Return a single root element** - To return multiple elements from a component, wrap them with a single parent tag.
For instance, We can use `<div>`

```html
<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>
```

If you don’t want to add an extra `<div>` to your markup, you can write <> and </> instead

```jsx
<>
  <h1>Hedy Lamarr's Todos</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
  >
  <ul>
    ...
  </ul>
</>
```

This empty tag is called a **Fragment**. Fragments let you group things without leaving any trace in the browser HTML tree.

**2. Close all the tags**
JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>oranges must be written as <li>oranges</li>`.

```jsx
<>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
   />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
</>
```

---

### Q: Superpowers of JSX?

A: `Integration of HTML-like Syntax` - JSX allows us to write code that looks like HTML in JavaScript. This makes it easy for developers to create user interfaces.

`Component-Based Structure` - JSX is especially powerful when used with libraries like React. It enables us to create reusable UI components, making our code more modular and maintainable.

`Dynamic Data Binding` - We can embed JavaScript expressions inside JSX using curly braces, allowing us to easily include and manipulate dynamic data within your user interfaces. JSX is easy to maintain and debug.

---

### Q: Role of `type` attribute in script tag? What options can I use there?

A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.

- `type` attribute can be of the following types

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.

  ```html
    <script type="text/javascript"></script>
  ```

- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

---

### Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`

A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

### Example

```jsx
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

---
