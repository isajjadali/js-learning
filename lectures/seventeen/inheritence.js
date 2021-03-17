class person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  }
  
  class teacher extends person {
    constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
    }
  
    getSubject() {
      return this.subject;
    }
  }
  
  class student extends person {
    constructor(name, age, marks) {
      super(name, age);
      this.marks = marks;
    }
  
    getMarks() {
      return this.marks;
    }
  }
  
  let teacherObject = new teacher('Sajjad Ali', 25, 'Javascript');
  let studentObject = new student('Hamza', 24, 90);
  
  console.log(teacherObject.getSubject());
  console.log(studentObject.getMarks());
  