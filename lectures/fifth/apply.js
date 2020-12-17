function getFullName(age, subject) {
    return this.fName + ' ' + this.lName + '=> ' + age + '=> ' + subject;
}

let user = {
    fName: 'Sajjad',
    lName: 'Ali',
};

console.log(getFullName.apply(user, [21, 'Javascript']));
