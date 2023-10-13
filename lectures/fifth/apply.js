function greet(message) {
    console.log(message + ' ' + this.name);
  }
  
  const person = {
    name: 'Learning With US'
  };
  

  greet.apply(person, ['Learn With US']); 
  
  
console.log('Apply Method', 'Learning With Us');








function getFullName(age, subject) {
    return this.fName + ' ' + this.lName + '=> ' + age + '=> ' + subject;
}

let user = {
    fName: 'Learning',
    lName: ' With US',
};

console.log(getFullName.apply(user, [21, 'Javascript']));
