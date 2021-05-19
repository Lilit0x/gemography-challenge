# gemography-challenge
Hello there, and this is the solution to the backend challenge I received from Gemography

## Language and tools used
- NodeJS
- Axios
- Express.js
- Helmet
- chalk
- cross-env
- dotenv
- config

## Accessing the API
The base route of the API is `http://localhost:3000/v1`

## Routes exposed by the API
1. `http://localhost:3000/v1` This is the base URL for the API. Hitting this route provides the version, name and status of the API
2. `http://localhost:3000/v1/languages` This is the route that implements the functionality described in the challenge. It returns a filtered list of the languages used by the 100 trending repos, and for each calculates the nunmber of repos using it and lists the names.
  
## Folder Structure
The base folder contains a `config` and the `src` folder.
The `app` folder in`src` is where the functionality is located. The entry is `server.js`. 
Middlewares are registered in the `middlewares/index.js`. 
The `modules/languages` folder is the core functionality, i.e where the solution is. 
It contains the router, controller and index file. 
The module is registered with `app` in `modules/languages/index.js` and then initialized in `modules/index.js`.
The `app` is then finally bootstrapped and initialized in `server.js`.
