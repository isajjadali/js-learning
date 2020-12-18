function printUserDetails(profession) {
    // return 'The age of ' + this.fName + ' ' + this.lName + ' is ' + this.details.age + ' and he is a ' + profession;

    // this is called string literal
    return `The age of ${this.fName} ${this.lName} is ${this.details.age} and he is a ${profession}`
}

let user = {
    fName: 'sajjad',
    lName: 'ali',
    details: {
        age: 25,
    }
}

let user1 = {
    fName: 'hassan',
    lName: 'ali',
    details: {
        age: 22,
    }
}

let user2 = {
    fName: 'basit',
    lName: 'ali',
    details: {
        age: 20,
    }
}


console.log(printUserDetails.call(user, 'Developer'), 'printUserDetails.call(user');
console.log(printUserDetails.apply(user1, ['Developer']), 'printUserDetails.apply(user)');
console.log(printUserDetails.bind(user2)('Developer'), 'printUserDetails.bind(user2)');
