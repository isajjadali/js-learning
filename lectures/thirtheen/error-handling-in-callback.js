sum(1, 2, (result, error) => {

    if (result) {
        console.log(result, 'result');
    }
    else {
        console.log(error, 'error');
    }



})

function sum(a, b, c) {
    const result = a + b;
    c(undefined, 'this is an error')
}
