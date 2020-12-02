
print(); // => undefined

function print() {   // function declaration
    var a = 10;
    console.log(a); // => 10
}

b();     // => error

var b = function () {   // function expression
    console.log(20);   // => 20
}

b(); // => undefined
