// Ways to declare function

function sum(x, y) {
    return x + y;
}

let multiple = function (x, y) {
    return x * y;
}

let divide = (x, y) => {
    return x / y;
}

let minus = (x, y) => x - y;


console.log('result of sum is ', sum(1, 2));   // should return 3 

console.log('result of multiple is ', multiple(2, 2));  // should return 4

console.log('result of divide is ', divide(10, 2));  // should return 5

console.log('result of minus is ', minus(5, 2));  // should return 3
