let obj = {
    a: 2,
    b: 3,
}

let obj1 = obj;
obj1 = { c: 2, e: 5 }

obj1.d = 89;

console.log(obj, 'obj');
console.log(obj1, 'obj1');


