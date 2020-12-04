let array = [1, 2, 3];

let array1 = array;

array1.push(4);

console.log(array, 'array');  // => [1,2,3,4]
console.log(array1, 'array1'); // => [1,2,3,4]

// shallow copy
let array2 = [...array];
let array3 = Object.assign([], array);

array2.push(5);
array3.push(6);


console.log(array2, 'array2');  // => [1,2,3,4]
console.log(array3, 'array3'); // => [1,2,3,4]
