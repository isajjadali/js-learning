let sum = getPromise(sum1);
let mul = getPromise(mul1);
let minus = getPromise(minus1);
let divide = getPromise(divide1);

let sum1 = (a, b) => a + b;
let mul1 = (a, b) => a * b;
let minus1 = (a, b) => a - b;
let divide1 = (a, b) => a / b;

function getPromise(func) {
    return (a, b) => {
        new Promise((resolve, reject) => {
            resolve(func(a, b));
        })
    }
}

sum(1, 2)
    .then(result => {
        return minus(result, 1);
    })
    .then(result => {
        return mul(result, 3);
    })
    .then(result => {
        console.log(result, 'result');
    })
    .catch(err => {
        console.log(err, 'err');
    })
    .finally(() => {  // it calls weather promise reject/resolve
        console.log('finally');
    })
