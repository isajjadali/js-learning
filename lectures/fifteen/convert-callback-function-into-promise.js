
sum(1, 2, (result, err) => {
    if (!err) {
        minus(1, 2, (result, err) => {
            if (!err) {
                return result;
            }
            throw new Error('Error In Sum');
        });
    }
    throw new Error('Error In Sum');
});

function sum1(a, b) {
    return new Promise((resolve, reject) => {
        sum(a, b, (result, err) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    })
}

function minus1(a, b) {
    return new Promise((resolve, reject) => {
        minus(a, b, (result, err) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    })
}


sum1(1, 2)
    .then(res => {
        return minus1(res, 2);
    })
    .then(res => {

    })
