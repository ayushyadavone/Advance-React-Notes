import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement( 
    "div", 
    { id: "parent" }, 
    [
        React.createElement("div", { id: "child1" }, [
            React.createElement("h1", {}, "I'm the h1"),
            React.createElement("h2", {}, "I'm the h2")
        ]),
        React.createElement("div", { id: "child2"}, [
            React.createElement("h1", {}, "I'm the h1"),
            React.createElement("h2", {}, "I'm the h2"),
        ])
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent) 

// Notes :

// package.json is a configuration for npm. (npm init)

// Parcel, Vite, and Webpack are bundlers, and they basically bundle/package our app so that it can be shipped to production. (npm install -D parcel)

// In package.json, we see the Parcel version (^2.12.0). The caret (^) indicates that Parcel will automatically be upgraded when a minor update is released.

// package-lock.json keeps a track of exact version of all the dependencies that is being installed (without any tilde or caret).

// node-module contains all the code that we fetched from npm. It is kind of like a database which contains the actual data of those dependencies that our project needs.

// Parcel needs a lot of other dependencies, that is why so many folders inside node_module.

// Using the command npx parcel index.html, Parcel will create a server for us, and our app will be available on it. npx means executing a package, while npm installs a package.

// npm install react, npm install react-dom, these commands will install react and react dom as the normal dependencies.

// React makes our app fast, but there are many other things, like bundlers (Parcel), that also improve our app's performance.

// The command 'npx parcel build index.html' will build 3 files in the dist folder, which are production-ready code for us. To avoid errors when running this command, we need to remove "main": "App.js" from the package.json file.

// You DO NOT NEED TO PUSH the .parcel-cache, node_modules, and dist folders to GitHub, as they can be regenerated by the server.

// By adding "browserslist": ["last 2 versions"] to your package.json, you can make your app support the last two versions of all browsers.