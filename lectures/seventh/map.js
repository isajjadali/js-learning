Array.prototype.map1 = function (callback) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i]));
    }
     return array;
}

let array = [1, 2, 3, 4, 5, 6];

let array2 = array.map1((item) => {
    return item + 1;
});

console.log(array2);