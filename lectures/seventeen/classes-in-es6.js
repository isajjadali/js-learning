class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

let x = new Person('sajjad', 21);
let y = new Person('sajjad', 21);
let z = new Person('sajjad', 21);
console.log(x, 'x');
console.log(y, 'y');
console.log(z, 'z');
