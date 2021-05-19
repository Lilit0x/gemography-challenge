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

## Accessing the API
The base route of the API is `http://localhost:3000/v1`

## Routes exposed by the API
1. `http://localhost:3000/v1`: This is the base URL for the API. Hitting this route provides the version, name and status of the API
2. `http://localhost:3000/v1/languages`: This is the route that implements the functionality described in the challenge. It returns a filtered list of the languages used by the 100 trending repos, and for each claculates the nun=mber of repos using it and list the names.
