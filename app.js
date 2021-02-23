function sum(a, b) {
    return new Promise((resolve, reject) => {
        reject(a + b);
    })
}

function mul(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a * b);
    })
}

const result = sum(1, 2);

result.then((response) => {
    console.log(response, 'response');
    return mul(response, 3)
})
.then((res)=>{
    console.log(res, 'res');
})
.catch((err)=>{
    console.log(err, 'err');
})
