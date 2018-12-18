'use strict';

module.exports = exports = {};


// Interface Method: sayHello(name)
// @param {string} name
// @returns {string}


exports.sayHello = (...args) => {
  if(args.length !==1) {return null;}
  if (typeof args[0] !== 'string') {return null;}
  return `Hello, ${args[0]}`;
};
