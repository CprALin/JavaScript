//console.log(arguments);
//console.log(require('module').wrapper);

const Cal = require('./test-module-1');
const calc1 = new Cal();

//module.exports
console.log(calc1.add(2,5));

//exports
//const calc2 = require('./test-module-2');
const { ddivide } = require('./test-module-2');
console.log(ddivide(10,2));

//caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();