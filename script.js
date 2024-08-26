//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

// Subclass: Student
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Subclass: Teacher
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage:
const student = new Student("Alice", 22);
student.study(); // 

const teacher = new Teacher("Jhon", 25);
teacher.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
