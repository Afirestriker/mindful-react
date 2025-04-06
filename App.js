import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX - HTML-Like or XML-Like syntax
// JSX (transpiled before it reached to JS Engine) - Babel
// JSX => React.createElement => React Element (JS Object) => HTMLElement(render)

const jsxHeading = <h1 id="heading">Mindful React from JSX 🚀</h1>;

console.log('jsx', jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);
