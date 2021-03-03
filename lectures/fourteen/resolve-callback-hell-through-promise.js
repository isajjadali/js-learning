function sum(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a + b);
    })
}

function minus(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a - b);
    })
}

function mul(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a * b);
    })
}

function divide(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a / b);
    })
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
