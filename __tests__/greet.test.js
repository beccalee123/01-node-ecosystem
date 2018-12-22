'use strict';

const faker = require('faker');

let nameOne = faker.name.firstName;
let nameTwo = faker.name.firstName;
let num = faker.random.number;

const hello = require('../lib/greet.js');

describe('Hello', () => {
  
  it('requires one param', () => {
    let message = hello.sayHello();
    expect(message).toBeNull();
  });

  it('only allow one param', () => {
    let message = hello.sayHello(nameOne, nameTwo);
    expect(message).toBeNull();
  });

  it('does not allow numeric values', () => {
    let message = hello.sayHello(num);
    expect(message).toBeNull();
  });

  it('does not allow arrays as a param', () => {
    let message = hello.sayHello([]);
    expect(message).toBeNull();
  });

  it('does not allow objects as a param', () => {
    let message = hello.sayHello({});
    expect(message).toBeNull();
  });

  it('works when given a word', () => {
    let message = hello.sayHello('World');
    let expectedOutput = 'Hello, World';
    expect(message).toEqual(expectedOutput);
  });

});