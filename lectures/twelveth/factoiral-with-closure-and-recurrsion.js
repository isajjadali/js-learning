// function factorial(param) {
//     if (param < 2) return param;

//     return param * factorial(param - 1);

// }

// console.log(factorial(20));
// console.log(factorial(20));


// Assignment
// write upper factorial function as closure function that memoized the result for same type of arguments
function getFactorialFunction() {
    const obj = {};

    return function factorial(number) {
       console.log(obj, 'obj');
        if (obj[number]) {
            return obj[number];
        }

        if (number < 2) {
            return number;
        }
        const result = number * factorial(number - 1);
        obj[number] = result;
        return result;
    }
}


let factorial = getFactorialFunction();
console.log(factorial(5), 'factorial(5)');;
console.log(factorial(6), 'factorial(6)');;
console.log(factorial(5), 'factorial(5)');;
