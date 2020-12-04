function print(a) {
    a = 30;
    console.log(a, 'inner a');
}

let x = 20;
print(x);
console.log(x, 'outer x');
