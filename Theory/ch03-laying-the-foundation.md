# Chapter 03 - Laying The Foundation

> - 💡 React.createElement => React Element (JS Object) => HTTPElement(render)
> - 💡 JSX => Babel transpiled it to -> React.createElement => React Element (JS Object) => HTTPElement(render)

## Q. What is JSX?

A: JSX is an javaScript extension **HTML-Like** or **XML-Like** syntax.

- JSX is not tied to React, nor is React ties to JSX. Both are separate.
- JSX is an alternate way of writng `React.createElement();`
- JSX is not an valid pure javaScript syntax. JS engine can't directly understand the JSX syntax.
- JSX is need to be **transpiled** before it goes to the JS Engine.
- If you have to give attributes to JSX, you have to use `camelCase` for e.g., `class => className`, `tabindex => tabIndex`, etc.
- JSX in multi-line is not a valid JavaScript, so we need to wrapped it inside round braces `()` while writting multi line JSX.
The round brackets `()` helps babel (transpiler) understand the starting and ending of an JSX syntax.
- You can also execute any JavaScript expression within JSX, by wrapping it inside curcly barces `{}`.
- JSX take care of any injection attacks as well. For example: if a API passed some malicious data into our code, the JSX will not blindly run it, rather it will escapse it.
  - JSX Sanitize the data before processing the JavaScript extension wrapped inside the curcly braces `{}`.
  - JSX also prevent cross-side scripting attacks.

> - 💡 JavaScript is a code that JS engine can understand (ECMA-Script)
> - 💡 Transpile - converting the code into what browser can understand

## Q. What kind of language does the JS engine understand?

A: ECMA Script

## Q. If JSX is not a pure javaScript then how come then the browser understand and render JSX syntax?

A: The JSX is transpiled into the one that browser can understand using a compiler like `Babel` and then forwarded to JS engine.

## Q. What are two ways of creating a React component?

A: Class Based Component (old) and Functional Component (new)

## Q. What is React functional Component?

A: React Functional Component is just a normal JavaScript function that's return a piece of JSX (ReactElement)

> 💡Important: Always remember to use PascalCase in naming React Component. Its a react way of knowing that what is component and what is not.

## Q. What's the difference between React Element and React Component?

A:

- Representation:
  - An element is a description of what should be rendered, while a component is a function or class that produces elements.
- Mutability:
  - Elements are immutable, while components can manage their own state and behavior.
- Reusability:
  - Components are reusable building blocks, while elements are specific instances of UI elements.
- Lifecycle:
  - Components have a lifecycle (mounting, updating, unmounting), while elements do not.
- Rendering:
  - Elements are rendered by React to the DOM, while components are invoked to produce elements.

## Q. What is Component Composition?

A: Nesting a component within one another OR, composing two components into one another.
