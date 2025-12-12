function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;

}

function Student(age){
    this.age = age;
}

// Inheretance using prototype
// Here we inherit properties from parent

Student.prototype.getAge = function(){
    return this.age;
}

Student.prototype = new Person("Santanu","Paikaray");

var student = new Student();
console.log(student.firstName);
