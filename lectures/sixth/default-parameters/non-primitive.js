function printDetails(user = { fName: 'Hassan', lName: 'ali' }) {
    return `${user.fName} ${user.lName}`;
}

console.log(printDetails(), 'printUserDetails()'); // => Hassan Ali
console.log(printDetails({ fName: 'Sajjad', lName: 'Ali' }), 'printUserDetails()'); // => Sajjad Ali
