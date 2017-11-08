# Redux Github Client

**Note:** The application is a demonstration instance. 

* Display User Page. Public repos, followers, following are displayed in `PopoverWithPageWrapper` component.
It allows to load data by itself on mouseOver event. Also loaded data caches in redux store.
* Display Repo Page. Subscribers and stargazers are displayed in `PopoverWithPageWrapper` component.
It allows to load data by itself on mouseOver event. Also loaded data caches in redux store.
* React-Redux application.
* Reducer logic is reusable with help of `createTypedReducer`.
* Data fetching realized in `githubApi` middleware.
* Immutable.js is not used, but can be easily integrated.
* State is simplified. There is no any normalizations in it.

## Table of Contents

- [Installation](#instalation)
- [Scripts](#scripts)
- [Production mode](#production-mode)
- [Development mode](#development-mode)

## Installation

**Note:** Make sure git, NodeJs and NPM are installed

* Clone the current repository:
```bush
git clone https://github.com/serjilyashenko/redux-github-client.git
```
* For installation of npm dependencies execute from project folder:
```bush
npm install
```

## Scripts

* `npm start` - start application in development mode

* `npm run build` - start application in production mode

* `npm run build:serv` - start production mode with `static-server`

* `npm run format` - format code sources using prettier.js

* `npm run lint` - lint code sources using `eslint-config-airbnb`

* `npm test` - start unit tests using jest and enzyme

* `npm run test:watch` - start unit tests in watch mode

    "test": "jest
    "test:watch": "npm test -- --watch

## Production mode

The result of the production mode is `build` folder. It includes `index.html` and `bundle.js`.
The JS file is compressed.

* For project building in production mode execute the next command:
```sh
npm run build
```

* The folder `build` can be used in any static server. Or

* Start `static-server` using the next command:
```bash
npm run build:serv
```
* Check `localhost:8080`.

* The folder `build` can be used in any static server.

## Development mode

* Start `dev server` by the next command:
```bash
npm start
```

* Check `localhost:8080`.


