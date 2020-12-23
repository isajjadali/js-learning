function x1() {
    console.log('x1');
}

function printX2(callback) {  // when printX2 call the argument passed will come here as a paramter
    console.log('x2');
    callback();   // here you are calling x1 as a callback
}


printX2(x1);  // calling printX2 and passing x1 as an argument
