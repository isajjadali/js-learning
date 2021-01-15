function factorial(param) {
    if (param < 2) return param;

    let value = param * factorial(param - 1);

    console.log(value, 'value when param is => ', param);

    return value;
}

factorial(5);
