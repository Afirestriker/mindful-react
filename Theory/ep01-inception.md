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
