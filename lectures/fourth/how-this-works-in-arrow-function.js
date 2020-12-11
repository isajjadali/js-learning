this.fName = 'Taimoor';
this.lName = 'Haider';

let user = {
    fName: 'Sajjad',
    lName: 'Ali',
    getFullName: () => {
        return 'User Name: ' + this.fName + ' ' + this.lName;
    }
}


console.log(user.getFullName());   // print `User Name: Taimoor Haider`

// Because Arrow function is using the reference of its parent `this` object
