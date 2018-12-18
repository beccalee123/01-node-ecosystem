![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 01 Node Ecosystem

### Author: Becca Lee

### Links and Resources

[![Build Status](https://www.travis-ci.com/beccalee123/01-node-ecosystem.svg?branch=master)]
* [repo](https://github.com/codefellows-seattle-javascript-401d28/01-node-ecosystem)
* [travis](https://www.travis-ci.com/beccalee123/01-node-ecosystem)
* [server](https://becca-01-node-ecosystem.herokuapp.com/)

### Modules
#### `greet.js`
##### Exported Values and Methods
`greet.sayHello('name')`
Used to return a concatenated string of "Hello" and a name
`greet.sayHello('World')` returns "Hello World"
`greet.sayHello('Becca', 'Heather')` returns null
`greet.sayHello([array])` returns null
`greet.sayHello({object})` returns null
`greet.sayHello()` returns null
`greet.sayHello(4)` returns null 


### Setup
#### `.env` requirements
* `PORT` - defined by ENV

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns console logs from modules.

#### Tests
* How do you run tests?
Tests are run using `npm run lint`, `npm run test` locally, and Travis once it's pushed up to GitHub/before it's deployed
* What assertions were made?
For the greeting modules, tests were made for the following:
- User must enter at least one parameter
- User must not enter multiple parameters
- User must not enter a number
- User must not enter an array
- User must not enter an object
- Success when a user enters a single string
* What assertions need to be / should be made?
- I think the assertions made so far cover the bases
