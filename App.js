/**
 * <div>
 *  <div>
 *    <h1></h1>
 *  </div>
 * </div>
 *
 * ReactElement is an Object => which convert the object into an HTML tag which the Browser's understand
 * ReactElement(Object) => HTML(Browser Understand)
 */
const heading = React.createElement('h1', {id: 'heading', name: 'Ashish'}, 'Hello World From React!');
const children = React.createElement('div', {id: 'child'}, heading);
const parent = React.createElement('div', {id: 'parent'}, children);

console.log(parent) // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
