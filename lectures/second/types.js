let a;

// Primitive types
a = 'sajjad';
console.log(typeof a) // => 'string'

a = 2;
console.log(typeof a) // => 'number'

a = false;
console.log(typeof a) // => 'boolean'

a = undefined;
console.log(typeof a) // => 'undefined'

a = null;
console.log(typeof a) // => 'object'

// Non primitives types
a = function () { }
console.log(typeof a) // => 'function'

a = [1, 2, 3];
console.log(typeof a) // => 'object'

a = { b: 2 };
console.log(typeof a) // => 'object'
