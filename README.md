# Webpack config for AngularJS

> Test Task

## Dependencies
* [GIT](https://git-scm.com/downloads) 
* [Node JS](https://nodejs.org/en/download/current/)
* NPM (Node JS includes NPM)

## Install
In your terminal type following commands:

```bash
git clone git@github.com:regizum/angularjs-test-task.git
cd angularjs-test-task
```

then you need install packages:

##### Install with NPM
```bash
npm install
```
##### Install with Yarn
```bash
yarn install 
```

## Run

Next, build the project with following command:
```
npm run build:dev
```
then, run server:

```
npm run server:dev
```

#### Production commands

For build production code type:

```bash
npm run build
```

then run http server:

```bash
npm run server:prod
```

server will run on [http://127.0.0.1:3000](http://127.0.0.1:3000)

> Node: by default server uses port 3000, make sure that this port is free

## Angular.js entry point 

Angular JS application files located in `src/app`. The `main.js` is the entry point for AngularJS app.

## License

This repo sharing under [MIT](LICENSE) license
