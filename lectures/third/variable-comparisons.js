// takes input from terminal console
// console.log(process.argv[2]);

// primitives are always equal to their value
console.log(2 === 2, 'number === number');
console.log('2' === '2', "string === string");
console.log(true === true, 'boolean === boolean');
console.log(undefined === undefined, 'undefined === undefined');
console.log(null === null, 'null === null');


// non primitives are not equal to their value
console.log([] == [], 'array === array');
console.log({} == {}, 'object === object');
console.log(function () { } === function () { }, 'function === function');
