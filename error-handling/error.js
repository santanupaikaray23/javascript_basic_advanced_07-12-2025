var error = new Error();
console.log(error)
var error = new Error("This is new Error");
console.log(error)
try{
    throw new Error("This is thrown error");
}
catch(ex){
    console.log(ex)
}