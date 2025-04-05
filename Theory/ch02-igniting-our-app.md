# Chapter 02 - Igniting Our App

## Q: What is `npm`?

A: `NPM` is a **package manager** for node or in other term it is a registry for managing package. Interestingly `npm` doesn't actually stand for `Node Package Manager`.

## Q. What is `package.json`?

A:

- `package.json` is basically a configuration file for our `npm`. Sometimes the **packages** are also known as **dependencies**.
- `Package.json` helps keep track of the `dependencies` and their `versions` along with `type` as in whether they are **devDependencies** or a normal **dependencies**

## Q. What is the difference between `packages` and `dependencies`?

A: Packages and dependencies are one and the same things.

- Our project is dependent on packages and those packages on which the project dependent on are called **dependencies**.
- npm help in managing the version of the packages.

>> `Bundler` is the most important package in our project

## Q. Waht are the type of dependencies? What the difference between normal `dependencies` and `devDependencies`?

A: There are two types of dependencies: `dependencies` and `devDependencies`

- `Dependencies`: This are the dependencies whcih are use for development as well as for production.
- `DevDependencies`: Dependencies which are only for development phase/ purpose.

## Q. What is transitive dependencies?

A: A package dependent on another dependencies/packages is known as transitive dependencies.

- For e.g. A  `parcel` package is dpedendent on `chalk`, `babel`, and etc.
- Check a look into node_module folders, where you will find project/module wise package.json files.

## Q. What is package.json and package-lock.json?

A:

- Package.json is the configuration file with depdencies information along with version (either fixed or approx in the form of titlt(~), caret(^), etc)
- Package-lock.json is the file which contains the excat versions of all the transact or direct dependencies.
- Package-lock.json also hold the `integrity` **hash value** to make sure the exact version is install on production which is being used locally while development.
  This helps aboid issues like "running on local but not on production".

## Q. What is node_modules and do we need to push this on github/cloud?

A: `node_module` is a registry containing all the package files/codes, pulled from the npm registry on `npm install <packageName`

- node_modules is created from the package.json and package-lock.json, and it is re-creatable.
- Alongside, node_module contains registray of all inter-dependent/ transitive dependent packages which are not directly a part of your actual code, making it huge in size.
- So, since it is re-creatable, it is not needed as well nor recommended to push node_module onto github or any cloud server.

>> Git should only track essential things and GitHub/cloud repo should only hold the essential things. Whatever is recreatable should be avoided from tracking and storage.
