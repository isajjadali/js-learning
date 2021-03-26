 Array.prototype.forEach1 = function (callback) {
     for (let i = 0; i < this.length; i++) {
         callback(this[i]);
     }
}

let array = [1, 2, 3, 4, 5, 6];

array.forEach1((item) => {
     console.log(item);
 })
