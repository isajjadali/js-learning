function sum(a = 2, b = 3) {
    return a + b;
}

console.log(sum(), 'sum()');   // => 5
console.log(sum(4, 5), 'sum()'); // => 9
console.log(sum(4), 'sum()'); // => 7
console.log(sum(undefined, 4), 'sum()'); // => 6
