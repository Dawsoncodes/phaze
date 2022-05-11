# Phaze coding challenge

The application contains two microservices, one is the API and the other is the service which will communicate between the API and the Polygon API.

## Run the app

In order to run the App you need to have Docker and docker-compose installed in your computer.

The only configurations you need to make is adding the environment variables in the `docker-compose.yml` file which are:

- `AUTH_TOKEN`: is the authentication token that the client needs to set in the `headers` when sending a request.
- `POLYGON_API_KEY`: your polygon API key.

After you have set the environment variables, run the following command in the root directory `docker-compose up --build`

Your application should be running on `http://localhost:3000`

The middleware (service layer) doesn't need authentication since the node.js port is not exposed, meaning the application can only be accessed inside the same docker network.