# React: Notes

## Chapter 02 - Igniting Our App

### Q: What is `npm`?

A: `NPM` is a **package manager** for node or in other term it is a registry for managing package. Interestingly `npm` doesn't actually stand for `Node Package Manager`.

---

### Q: What is `package.json`?

A:

- `package.json` is basically a configuration file for our `npm`. Sometimes the **packages** are also known as **dependencies**.
- `Package.json` helps keep track of the `dependencies` and their `versions` along with `type` as in whether they are **devDependencies** or a normal **dependencies**.

---

### Q: What is the difference between `packages` and `dependencies`?

A: Packages and dependencies are one and the same things.

- Our project is dependent on packages and those packages on which the project dependent on are called **dependencies**.
- npm help in managing the version of the packages.

> `Bundler` is the most important package in our project.

---

### Q: What are the type of dependencies? What the difference between normal `dependencies` and `devDependencies`?

A: There are two types of dependencies: `dependencies` and `devDependencies`.

- `Dependencies`: These are the dependencies which are used for development as well as for production.
- `DevDependencies`: Dependencies which are only for development phase/purpose.

---

### Q: What is transitive dependencies?

A: A package dependent on another dependencies/packages is known as transitive dependencies.

- For e.g. A `parcel` package is dependent on `chalk`, `babel`, and etc.
- Check a look into node_module folders, where you will find project/module wise package.json files.

---

### Q: What is package.json and package-lock.json?

A:

- Package.json is the configuration file with dependencies information along with version (either fixed or approx in the form of tilde (~), caret (^), etc).
- Package-lock.json is the file which contains the exact versions of all the transitive or direct dependencies.
- Package-lock.json also holds the `integrity` **hash value** to make sure the exact version is installed on production which is being used locally while development.
  This helps avoid issues like "running on local but not on production".

---

### Q: What is node_modules and do we need to push this on github/cloud?

A: `node_module` is a registry containing all the package files/codes, pulled from the npm registry on `npm install <packageName>`.

- node_modules is created from the package.json and package-lock.json, and it is re-creatable.
- Alongside, node_module contains registry of all inter-dependent/transitive dependent packages which are not directly a part of your actual code, making it huge in size.
- So, since it is re-creatable, it is not needed as well nor recommended to push node_module onto github or any cloud server.

> Git should only track essential things and GitHub/cloud repo should only hold the essential things. Whatever is recreatable should be avoided from tracking and storage.

---

### Q: What does it mean by Browser scripts cannot have imports and exports?

A:

- Standard browser scripts (those without the `<script type="module">` tag) do not natively support import and export statements.
- **ES Modules**:
  - ES Modules (using import and export) are a standard way to organize and share code between JavaScript files.
- **Browser Support**:
  - Modern browsers (Chrome, Firefox, Safari, Edge) support ES Modules, but only when the `<script>` tag has the `type="module"` attribute.

---

### Why the need for type="module"?

The type="module" attribute tells the browser to **parse the script as an ES module**, enabling the import/export functionality.

---

### Parsing a script as an ES module?

- It means, treating a JavaScript file as a module using the ECMAScript Modules (ESM) standard, which is done by using import and export statements and relying on the browser or Node.js to load and manage these modules.

---

#### Here's a more detailed explanation

**ES Modules (ESM):** ES Modules are a standardized way to organize and share code in JavaScript, using import and export keywords.

**Parsing:** When you tell a browser or Node.js to parse a script as an ES module, it means that the interpreter will:

- Recognize and process import and export statements.
- Load the specified modules (files) asynchronously.
- Create a module graph to track dependencies between modules.
- Execute the code in the correct order, ensuring that modules are initialized before they are used.

**How to indicate parsing as an ES module:**

- **HTML:** In HTML, you can use the `<script type="module">` tag to indicate that a script should be parsed as an ES module.
- **Node.js**: In Node.js, you can use the .mjs file extension, set the type field in package.json to "module", or use the --input-type module flag.

---

### Q: What is `<script type="importmap">` or `Bare Module Imports`?

A: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap](importmap MDN Docs)

---

### Q: How does bundler like parcel, babel, vite manage importmap, since I never manually created them? OR, how does `import React from 'react'` works?

A:
This is a common behavior in modern JavaScript development, especially within environments like those created by Vite, Create React App (CRA), or similar tools.
The reason you can use `import React from 'react'` without an explicit import map is due to how these tools handle module resolution and bundling.
Here's a breakdown of Node.js Module Resolution:

- **node_modules**: When you install React using `npm install react` or `yarn add react`, it gets placed in the **node_modules directory** within your project.
- **Module Resolution Algorithm**: Node.js has a `module resolution algorithm` that searches for modules in the node_modules directory. When you write import React from 'react', Node.js (or a bundler like Webpack or Vite) looks for a react package in node_modules.
- **package.json and main Field**: The react package in node_modules has a `package.json` file that specifies the entry point of the module using the `main` field. This tells the bundler which file to import when you write import React from 'react'.

---

### Q: Why Parcel?

A:

- Dev Build
- Local server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Content Hashing
- Code Splitting
- Differential Bundling - with type="module" and type="nomodule" to support old browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod builds
