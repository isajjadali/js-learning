let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array.indexOf(6)); // print index where 6 exist

console.log(array.indexOf(7) !== -1); // print true or false if 6 exist or not

console.log(~array.indexOf(6)); // replacement of (!== -1)

console.log(!~array.indexOf(6)); // replace (!== -1) and also reverse the result 

console.log(!!~array.indexOf(6)); // print true or false if 6 exist or not
