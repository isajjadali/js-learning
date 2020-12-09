function print() {
    let x = 10;

    if (true) {
        var value = 20;
        let x = 30;
        const y = 40;

        console.log(x, 'x => inside of if statement');
    }

    console.log(x, 'x => outside the if statement');
    console.log(value, 'value => outside the if statement');
    console.log(y, 'y => outside the if statement');

}

print();

// when it runs

// function print() {
//     var value;
//     let x = 10;

//     if (true) {
//         value = 20;
//         let x = 30;
//         const y = 40;

//         console.log(x, 'x => inside of if statement');
//     }

//     console.log(x, 'x => outside the if statement');
//     console.log(value, 'value => outside the if statement');
//     console.log(y, 'y => outside the if statement');

// }

// print();

