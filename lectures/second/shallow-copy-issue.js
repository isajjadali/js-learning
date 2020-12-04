function print(innerObject) {
    innerObject.b = 4;
    innerObject.d.a = 3;
    console.log(innerObject, 'inner object');
}

let object = {
    b: 2,
    d: {
        a: 1,
    }
};

// shallow copy
let shallowCopy1 = { ...object }; // ...(spread operator)

print(shallowCopy1);
console.log(object, 'outer object');
