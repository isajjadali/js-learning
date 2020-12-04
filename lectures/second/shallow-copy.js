function print(innerObject) {
    innerObject.c = 'testing';
    console.log(innerObject, 'inner object');
}

let object = {
    b: 2
};

// shallow copy
let shallowCopy = Object.assign({}, object);

let shallowCopy1 = { ...object }; // ...(spread operator)

print(shallowCopy);
console.log(shallowCopy, 'outer object');
