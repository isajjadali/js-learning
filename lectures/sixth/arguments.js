function sum() {
    // arguments variable is always present in a function
    let value = 0;
    for (let i = 0; i < arguments.length; i++) {
        value = value + arguments[i];
    }
    return value;
}


console.log(sum(1, 2, 3, 4, 5, 6), 'sum(1,2,3,4,5,6)');
