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
let deepCopy = JSON.parse(JSON.stringify(object)); // first convert it into string to make it as value and then parse it to make a new object

print(deepCopy);
console.log(object, 'outer object');
