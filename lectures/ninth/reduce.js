Array.prototype.reduce1 = function (callback, initialValue) {

    for (let i = 0; i < this.length; i++) {
        console.log(initialValue, 'initialValue');
        initialValue = callback(initialValue, this[i], i, this);

    }
    return initialValue;
}


// {
//     0:1,
//     1:2,
//     2:3
// }

let x = [1, 2, 3, 4, 5, 6].reduce1((accu, element, index) => {
    accu[index] = element;
    return accu;
}, {});


// console.log('<<<<<--------------Start-------------------->>>>>');
// console.log(x);
// console.log('<<<<<---------------End--------------------->>>>>');
