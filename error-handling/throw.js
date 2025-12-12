//throw error
try {
    throw "Error occurred!";
}
catch (error){
    console.log(error);
}

//throw with errorinfo
try {
    throw {
        id: 100,
        message :'This is a custom error'
    }
}
catch(ex){
    console.log(ex);

}

var sytaxError = new SyntaxError();
console.log(sytaxError)