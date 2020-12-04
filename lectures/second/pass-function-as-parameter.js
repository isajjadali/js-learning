function print(a) {
    console.log('print called!');
    a();
}

function testing() {
    console.log('testing called!');
}

function testing1() {
    console.log('testing1 called!');
}

print(testing);
print(testing1);
