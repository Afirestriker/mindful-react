# _Chapter 01 - Inception_

## Q: What is `Emmet`?

A: `Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.

## Q: How does the code or a browser understand what are `document`, `createElement`, `getElementById`, `innerHTML`, `appendChild`, and their functionality?

A: The browser have a `JavaScript Engine` init, which give the supoer-power to execute this javascript code.

## Q: Likewise JavaScript, does the browser know what is React?

A: No, browser do not understand React code! We as a developer have to configure to get react into our project either via a CDN, Node package, tool, framework.

## Q. What is CDN? Why do we use it?

A:

- A `CDN (Content Delivery Network)` is a system/network of distributed servers around the world that helps deliver web content (like images, stylesheets, JavaScript files, etc.) faster.
- When a user visits a website, the required files are served from the nearest server instead of fetching them from a central location.
- Main Benefits:
  - **Reduce page load time**: Speeds up web page loading because files are delivered from a server close to the user.
  - **Reduce bandwidth costs**: Bandwidth costs are a significant expense because every incoming website request consumes network bandwidth. Through caching and other optimizations, CDNs can reduce the amount of data an origin server must provide
  - **Increase content availability**
  - **Improve website security**: Helps prevent DDoS attacks by distributing traffic across multiple servers.
  - Reduces server load and prevents performance issues.
- Common Use Cases:
  - Loading common JavaScript libraries (e.g., jQuery, Bootstrap) via a CDN like Cloudflare or jsDelivr.
  - Serving images, videos, and static assets efficiently.

## Q. How is CDN and npm package different?

A: NPM (Node Package Manager)

- NPM is a package manager for JavaScript that allows developers to install and manage JavaScript libraries and tools.
- Instead of fetching libraries from a remote server each time, NPM downloads and installs them locally into the project.
- Main Benefits:
  - Lets developers use and manage dependencies easily within a project.
  - Supports version control, so you can ensure that a specific version of a library is used.
  - Allows developers to install thousands of open-source packages for React, Node.js, and other frameworks.

## Q. When to Use What (CDN or NPM)?

A:

- Use a CDN when you need to quickly load common JS libraries (e.g., jQuery, Bootstrap) or serve static assets efficiently.
- Use NPM when developing a project in React, Node.js, or any modern JavaScript framework where you need more control over dependencies.

## Q: Why is `React known as React`?

A: `React` is known as "React" because of its core principle, which is to efficiently react to changes in a component's state and efficiently update the user interface (UI) accordingly. The name "React" reflects the core concept of how the library operates.

## Q: What is `crossorigin in script tag`?

A: When a web page includes resources from different domains, it can introduce security and privacy concerns. Modern web browsers implement the same-origin policy, which restricts web pages from making requests to a different domain than the one that served the web page. This policy is designed to prevent malicious websites from accessing sensitive data from other domains without permission.

The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

**_Syntax_**

```html
    <script crossorigin="anonymous|use-credentials">
```

## Q Why are their two files imported/ injected when working with React project? What is difference between `React` and `ReactDOM`?

A:

### React

- This is the core of React. Core react framework algorithm.
- `React` is the core library of the React ecosystem. It is a JavaScript library for building user interfaces, focusing on creating reusable UI components and efficiently managing their state. React provides the tools and infrastructure to define components, handle their lifecycle, and manage state changes.
- `React` is the core library of the React ecosystem. Means, the react.js is same for both web-development and mobile-app development.
- The only changes is in the supportive library like `ReactDOM` for web-development and `ReactNative` for app-development.

### ReactDOM

- This is the another react library useful for DOM operations.
- This is the React-DOM which we need to modify the actual DOM (Document Object Model).
- `ReactDOM` is kind of like a bridge between react and browsers. Connecting react and DOM.
- `ReactDOM` is a package that provides the integration between React and the DOM (Document Object Model). It serves as the glue that allows React components to interact with the browser's DOM. ReactDOM is specifically designed for web applications, as it handles rendering React components to the HTML DOM. When you want to display React components in the browser, you need ReactDOM to take care of the rendering process. It provides methods like **`ReactDOM.render()`** to attach a React component to a specific HTML element in the DOM.

The reason why React made different file for both of them. Well React dose not only works on browsers. React also work on mobile phone usign `React Native`, `React 3D`.

## How does `React` and `ReactDOM` work together?

A: Creating element is a core concept of react and is handled by `React`, whereas creating root for rendering react stuff is the work of `ReactDOM`.

## What is difference between `react.development.js` and `react.production.js` files via CDN?

A:

### `react.development.js`

- This file is intended for development purposes. It contains the full and unminified version of the React library, including helpful warning messages and development-specific features.
- It is larger in size compared to the production version since it includes additional information and code to aid developers in identifying potential issues during development and debugging.
- When using **`react.development.js`**, developers get more descriptive error messages and warnings in the browser's console, making it easier to identify and address problems in the code.

### `react.production.js`

- This file is intended for production deployment. It contains the minified and optimized version of the React library, stripped of any development-specific code, warnings, and console logs.
- It is smaller in size compared to the development version, as all unnecessary code and debug information have been removed during the minification process.
- Using **`react.production.js`** results in faster loading times and improved performance for end-users, as the minimized code is more efficient and consumes fewer resources.

When deploying a React application to a production environment, it is best practice to use **`react.production.js`** (along with the corresponding **`react-dom.production.js`** file) from the CDN. This ensures that the application is delivered to users with a smaller and more optimized bundle, reducing the load time and improving overall performance.

During development, developers may prefer to use **`react.development.js`** (and **`react-dom.development.js`**) to take advantage of the helpful error messages and development tools that assist in identifying and resolving issues during the development and testing phase. However, it's essential to switch to the production version before deploying the application to a live environment to achieve better performance and user experience.

## Q: What is `async and defer`?

A:

- `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.

**_Syntax_**

```html
    <script src="demo_async.js" async></script>
```

- `Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.

**_Syntax_**

```html
    <script src="demo_defer.js" defer></script>
```

- Unless you're supporting ancient legacy systems, always add `type="module"` to all your script tags:

```html
    <script type="module" src="main.js"></script> and place the tag inside <head>
```

```html
    <script defer nomodule> can be used as a legacy fallback.
```

- As the name suggests, it allows you to import `modules`, which makes it easier to organize your code.
- Enable `strict mode` by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them.
- Execute your code only after the DOM has `initialized`, which makes DOM manipulation easier. Thanks to this, you won't need to listen to load/readystatechange/DOMContentLoaded events.
- Prevent top level variables from implicitly polluting the global namespace.
- Allow you to use top-level await in supported engines.
- Load and parse your code `asynchronously`, which improves load performance.
