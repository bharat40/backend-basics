## steps to initialize project (backend)

### npm init -y

- This creates a package.json file with default settings.

### npm install

- This will install any dependencies mentioned in your package.json

### npm i express nodemon

- Express is a backend framework to handle routing and server setup.
- Nodemon is a tool that automatically restarts your application when file changes are detected.

### write start script in package.json

- "scripts": {
  "start": "nodemon index.js"
  }

- Here, index.js is the main entry point for your application (you can rename it based on your file).

### route and controller folder

#### inside route

- const express = require("express"): This imports the Express framework.
- const router = express.Router(): This creates a new router instance. The router is a mini Express application that you can use to handle routes.
- module.exports = router: This exports the router object, so it can be used in other parts of the application.

#### inside controller

- module.exports.getMovies: This assigns a function to getMovies, allowing it to be exported and used in other parts of your application.

- (req, res) => { ... }: This is an arrow function that takes two parameters:
  req: The request object, containing information about the HTTP request.
  res: The response object, used to send the HTTP response back to the client.
- res.status(200).send("movies"): This sends a response with status code 200 (OK) and the message "movies" and console.log("movies"): Logs "movies" to the console.

- now go to app.js or index.js and write app.use(express.json());
  app.use("/movies", movieRoute);
