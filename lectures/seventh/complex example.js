function x1(callback) {
    console.log('x1');
    callback(x3);
}

function x2(callback) {
    console.log('x2');
    callback();
}

function x3(callback) {
    console.log('x3');
}



function print(callback) {  // when print call the argument passed will come here as a paramter
    callback(x2);   // here you are calling x1 as a callback
}


print(x1);  // calling print and passign x1 as an argument