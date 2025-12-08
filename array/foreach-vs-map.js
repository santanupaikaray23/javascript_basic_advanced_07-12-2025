//Map
var os = ['Windows', 'Linux', 'MacOS'];
var output1 = os.forEach(function(item){
    return item;
})
console.log(output1); //undefined

var os = ['Windows', 'Linux', 'MacOS'];
var output2 = os.map(function(item){
   return item;
})
console.log(output2); //['Windows', 'Linux', 'MacOS']