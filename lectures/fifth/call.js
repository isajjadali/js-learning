function getFullName(age, subject) {
    return this.fName + ' ' + this.lName + '=> ' + age + '=> ' + subject;
}

let user = {
    fName: 'Basit',
    lName: 'Ali',
};


console.log(getFullName.call(user, 21, 'Javascript'));
