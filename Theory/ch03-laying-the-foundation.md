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
- JSX are wrapped inside round braces `()` while writting multi line JSX.

> - 💡 JavaScript is a code that JS engine can understand (ECMA-Script)
> - 💡 Transpile - converting the code into what browser can understand

## Q. What kind of language does the JS engine understand?

A: ECMA Script

## Q. If JSX is not a pure javaScript then how come then the browser understand and render JSX syntax?

A: The JSX is transpiled into the one that browser can understand and forwarded to JS engine.
