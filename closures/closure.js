function greet(message){
    return function(name){
        return message+ '' + name
    }
}
var sayHello = greet("Hello");
console.log(sayHello)
console.log(sayHello("Santanu"))

function greet(message){
    return function(firstName){
        return function(Lastname){
            return function(City){
                return message+' '+
                firstName+' '+
                Lastname+' '+
                City
            }
        }
    }
}
console.log(greet("Hello")("Santanu")("Mandal")("Kolkata"))