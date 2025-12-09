var person = {
    firstName: "John",
    lastName: "Doe",
    city: "New York"
}
console.log(person)

person.age = 30;
console.log(person)
person.firstName = "Jane";

delete person.age;
console.log(person)

var preventObject = {
    name: "Santanu",
    city: "Kolkata",
    age: 25
}
Object.preventExtensions(preventObject);

preventObject.email = "santanu@desknick.com"
preventObject.city = "Mumbai"
delete preventObject.age;
console.log(preventObject);

var sealObject = {
    name: "Santanu",
    city: "Kolkata",
    age: 25
}
Object.seal(sealObject);

sealObject.email = "paikaray@gmail.com"
sealObject.city = "Mumbai"
sealObject.age = 26;
delete sealObject.age;
console.log(sealObject);

Object.seal()
-----------------
We can edit the properties but we can't add new properties or delete existing properties.

Object.freeze()
-----------------
we cann't add, edit and delete the properties.