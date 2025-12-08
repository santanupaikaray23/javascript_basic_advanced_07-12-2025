var person1={firstName:"John", lastName:"Doe", age:25};
var person2={firstName:"Jane", lastName:"Doe", age:30};

function getName(message, city){
    return message + 'form' + city + ' ' + this.firstName + ' ' + this.lastName;

}

var bindMessage = getName.bind(person1)('Hello','Boston')
console.log(bindMessage)

var bindMessage = getName.bind(person2)
console.log(bindMessage('Hello','Boston'))

var callMessage = getName.call(person3, "hello","Hi")
console.log(callMessage)