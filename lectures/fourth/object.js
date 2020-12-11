
let user = {
    fName: 'Sajjad',
    lName: 'Ali',
    getFullName: function (x, y) {
        console.log(x, y);
        console.log(this, 'this');
        return 'User Name: ' + this.fName + ' ' + this.lName;
    }
}

let user2 = {
    fName: 'hamza',
    lName: 'Ali',
    getFullName1: function () {
        return 'User Name: ' + this.fName + ' ' + this.lName;
    }
}

console.log(user.getFullName.call(user2));   // print `User Name: Sajjad Ali`


// this.a = 10;

// let print = function () {
//     console.log(this.a, 'print');
// }


// let print1 = () => {
//     console.log(this.a, 'print1');
// }



// console.log(print());
// console.log(print1());


/* -------------block-start-----------------*/
    // this.fName = 'Naqi';
    // this.lName = 'Haider';

    // let user = {
    //     fName: 'Sajjad',
    //     lName: 'ali',
    //     age: 25,
    //     getFullName: function () {
    //         return this.fName + ' ' + this.lName;
    //     }
    // };


    // console.log(user.getFullName());

/* ---------------block-end---------------*/
