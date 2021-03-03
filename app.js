// sum(1, 2, (result, err) => {
//     if (!err) {
//         minus(result1, 1, (result1, err1) => {

//             if (!err1) {
//                 mul(result1, 3, (result2, err1) => {

//                     console.log(result2, 'result2');
//                 })
//             }
//             console.log(err1, 'err1');
//         })
//     }

//     console.log(errs, 'errs');


// });
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
    .finally(() => {
        console.log('finally');
    })

console.log('its working faster');


let sum =  getPromise(sum1);
let mul =  getPromise(mul1);
let minus =  getPromise(minus1);
let divide =  getPromise(divide1);

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

// function sum(a, b) {
//     return new Promise((resolve, reject) => {
//         resolve(a + b);
//     })
// }

// function minus(a, b) {
//     return new Promise((resolve, reject) => {
//         resolve(a - b);
//     })
// }

// function mul(a, b) {
//     return new Promise((resolve, reject) => {
//         resolve(a * b);
//     })
// }

// function divide(a, b) {
//     return new Promise((resolve, reject) => {
//         resolve(a / b);
//     })
// }




// function sum(a, b, c) {
//     c(a + b);
// }

// function minus(a, b, c) {
//     c(undefined, 'error in minus');
// }

// function mul(a, b, c) {
//     c(a * b);
// }
