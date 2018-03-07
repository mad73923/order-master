[![Build Status](https://travis-ci.org/mad73923/order-master.svg?branch=master)](https://travis-ci.org/mad73923/order-master)

# PizzaHandler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## MongoDB server

Run `npm run db` for the dev database server at port 4000. Be sure to start a mongod service locally before.

### Mongod

Run `npm run dbdaemon` to start the DB daemon. The path might have to be adapted.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

For testing, the CHROME_BIN env must be set:
```
export CHROME_BIN=/usr/bin/chromium-browser
```

### Code coverage

Run `ng test --cc` to generate coverage report. Navigate to `./coverage/index.html` with your browser of choice to check the report.

Only code with 100% coverage will be accepted on master branch.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
