function print(innerArray) {
    innerArray.pop();
    innerArray = [1, 2];
    console.log(innerArray, 'inner array'); // not change the outer array because it update the reference and put value on it
}

let array = [3, 4]
print(array);
console.log(array, 'outer array');
