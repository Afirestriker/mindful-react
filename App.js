import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createELement => Object => HTMLElement(render)

const heading = React.createElement('h1', {id: 'heading'}, 'Mindful React 🚀');

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
