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
    console.log(`${this.name} is studying.`);
  }
}

// Subclass: Teacher
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Example usage:
const student = new Student("Alice", 20);
student.study(); // Output: "Alice is studying."

const teacher = new Teacher("Mr. Smith", 40);
teacher.teach(); // Output: "Mr. Smith is teaching."

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
