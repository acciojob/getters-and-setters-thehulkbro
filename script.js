//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age= age;
	}
}
get name{
	return this.name;
}
set age(age){
	this.age=age;
}
class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}
const student = new Student("Alice", 20);
student.study(); // Output: "Alice is studying."

const teacher = new Teacher("Mr. Smith", 40);
teacher.teach(); // Output: "Mr. Smith is teaching."
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
