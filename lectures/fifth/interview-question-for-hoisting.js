// Interview Question
function print() {
    try {
        throw new Error('');
    }
    catch (x) {
        var x = 10, y = 20;
        console.log(x, 'x'); // => 10
    }
    console.log(x, 'x'); // => undefined
    console.log(y, 'y'); // => 20
}

print();

// Run As s

// function print() {
//     var x, y;
//     try {
//         throw new Error('');
//     }
//     catch (x) {
//         x = 10;
//         y = 20;
//         console.log(x, 'x');
//     }
//     console.log(x, 'x');
//     console.log(y, 'y');
// }

// print();
