## This is a base setup combining both Docker and Apollo Graphql

Run `npm start` for local development.

### Building Docker
Run `docker-compose up --build -d` to build your application and publish the docker container.
Don't mind the errors, since it's using the Alpine image, to have the smallest image possible.

- `--build` creates image from scratch
- `-d` deamon mode - docker container continues on the background

Your GraphQL application will be build to src/build
