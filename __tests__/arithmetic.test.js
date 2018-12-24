'use strict';

const faker = require('faker');

let numOne = faker.random.number();
let numTwo = faker.random.number();

const arithmetic = require('../lib/arithmetic.js');

describe('Addition', () => { 
  it('works when two inputs are provided', () => {
    let vals =  arithmetic.add(numOne, numTwo);
    let expectedOutput = numOne + numTwo;
    expect(vals).toEqual(expectedOutput);
  });

  it('requires more than one param', () => {
    let vals = arithmetic.add(numOne);
    expect(vals).toBeNull();
  });

  it('needs more than zero params', () => {
    let vals = arithmetic.add();
    expect(vals).toBeNull();
  });

  it('does not accept strings as params', () => {
    let vals = arithmetic.add('hi', 'how are you');
    expect(vals).toBeNull();
  });
});

describe('Subtraction', () => {
  it('works when two inputs are provided', () => {
    let vals = arithmetic.subtract(numOne, numTwo);
    let expectedOutput = numOne - numTwo;
    expect(vals).toEqual(expectedOutput);
  }); 

  it('requires more than one param', () => {
    let vals = arithmetic.subtract(numOne);
    expect(vals).toBeNull();
  });

  it('needs more than zero params', () => {
    let vals = arithmetic.subtract();
    expect(vals).toBeNull();
  });

  it('does not accept strings as params', () => {
    let vals = arithmetic.subtract('hi', 'how are you');
    expect(vals).toBeNull();
  });
});

describe('Multiplication', () => {
  it('works when two inputs are provided', () => {
    let vals = arithmetic.multiply(numOne, numTwo);
    let expectedOutput = numOne * numTwo;
    expect(vals).toEqual(expectedOutput);
  }); 

  it('requires more than one param', () => {
    let vals = arithmetic.multiply(numOne);
    expect(vals).toBeNull();
  });

  it('needs more than zero params', () => {
    let vals = arithmetic.multiply();
    expect(vals).toBeNull();
  });

  it('does not accept strings as params', () => {
    let vals = arithmetic.multiply('wow', 'a string!');
    expect(vals).toBeNull();
  });
});

describe('Division', () => {
  it('works when two inputs are provided', () => {
    let vals = arithmetic.divide(numOne, numTwo);
    let expectedOutput = numOne / numTwo;
    expect(vals).toEqual(expectedOutput);
  }); 

  it('requires more than one param', () => {
    let vals = arithmetic.divide(numOne);
    expect(vals).toBeNull();
  });

  it('needs more than zero params', () => {
    let vals = arithmetic.divide();
    expect(vals).toBeNull();
  });

  it('does not accept strings as params', () => {
    let vals = arithmetic.divide('wow', 'a string!');
    expect(vals).toBeNull();
  });

  it('does not accept 0 as a param', () => {
    let vals = arithmetic.divide(numOne, 0);
    expect(vals).toBeNull();
  });
});