function print(innerObject) {
    innerObject.c = 'testing';
    console.log(innerObject, 'inner object');
}

let object = {
    b: 2
};
//let arr= JSON.parse(JSON.stringify(object));
print(object);
console.log(object, 'outer object');
