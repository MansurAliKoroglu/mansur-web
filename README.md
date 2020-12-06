# mansur-web

Personal website of Mansur Ali Koroglu

## Running the development server

This project is dockerized. You just need docker and docker-compose to run it locally.

### Requirements

- Docker Engine
- Docker Compose

### How to

```
docker-compose up app
```

Now you can visit localhost:3207 and start using the website.

## Using npm

There is a Dockerfile to interact with npm.

Use any command you like as ```docker-compose run npm [command]```

Example:
```
docker-compose run npm install axios
```
