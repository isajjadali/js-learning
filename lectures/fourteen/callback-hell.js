sum(1, 2, (result, err) => {
    if (!err) {
        minus(result, 1, (result1, err1) => {
            if (!err1) {
                mul(result1, 3, (result2, err1) => {

                    console.log(result2, 'result2');
                })
            }
            console.log(err1, 'err1');
        })
    }
    console.log(errs, 'errs');
});

function sum(a, b, c) {
    c(a + b);
}

function minus(a, b, c) {
    c(undefined, 'error in minus');
}

function mul(a, b, c) {
    c(a * b);
}
