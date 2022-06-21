# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

First you need to clone the repo into a local folder, and then [install docker](https://docs.docker.com/get-docker/).
Now you can verify the installation by running docker -v, and docker-compose -v.
Next, in order to run the application all you need to do is run docker-compose up.
The backend will be accessible on [this url](http://localhost:3000/api/) and the frontend will be accessible on [this url](http://localhost:3001/register/).
