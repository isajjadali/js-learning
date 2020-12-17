function getFullName(age, subject) {
    return this.fName + ' ' + this.lName + '=> ' + age + '=> ' + subject;
}

let user = {
    fName: 'Sajjad',
    lName: 'Ali',
};


let func = getFullName.bind(user);

console.log(func(25, 'Java'));
