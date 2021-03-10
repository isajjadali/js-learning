function print(innerObject) {
    let obj = { ...innerObject };
    obj.c = 'testing';
    console.log(obj, 'inner object');
}

let object = {
    b: 2
};

print(object);
console.log(object, 'object');

// // shallow copy
// let shallowCopy = Object.assign({}, object);

// let shallowCopy1 = { ...object }; // ...(spread operator)

// print(shallowCopy);
// console.log(shallowCopy, 'outer object');
