var sample = (function(){
console.log('Anonymous Function Called')
return 1;
 })();
 console.log(sample)

 var output = (function(){
    var name = "Santanu"
    getName = function(){
        return name;
    }
    return getName();
 })()
    console.log(output)