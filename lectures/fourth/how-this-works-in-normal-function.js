this.fName = 'Taimoor';
this.lName = 'Haider';

let getFullName = function () {
    return this.fName + ' ' + this.lName;
}

let getFullName1 = () => {
    return this.fName + ' ' + this.lName;
}

let user = {
    fName: 'Sajjad',
    lName: 'Ali',
    getFullName: function () {
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

console.log(getFullName());   // print `User Name: undefined undefined`
console.log(getFullName1());   // print `User Name: Taimoor Haider`
console.log(user.getFullName());   // print `User Name: Sajjad Ali`
console.log(user2.getFullName1());   // print `User Name: Hamza Ali`

// Because normal function here is called by the refrence of user.

// Now the question is how we know that getFullName is called by user refrence ? 

// Answer:
// we are calling it like this `user.getFullName()` here the object `user` before `.getFullName()` 
// is the object which is passed as a refrence of this in `getFullName` function
