function sum(a, b, c, ...rest) {  // spread operator when used as a parameter it always called rest operator
    let value = a + b + c;
    for (let i = 0; i < rest.length; i++) {
        value = value + rest[i];
    }
    return value;
}


let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(sum(...x), 'sum(...x)');
