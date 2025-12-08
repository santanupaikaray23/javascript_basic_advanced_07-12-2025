//Array Literal Syntax
var array = [];
console.log(array);

var students = ['John', 'Jane', 'Jim'];
console.log(students);

var arrayList = ['Apple', 42, true, null, {name: 'Orange'}, [1, 2, 3]];
arrayList[6] = 'Banana';
console.log(arrayList);

//push- will add the element at the end of the array
var technologies = ['HTML', 'CSS'];
technologies.push('JavaScript');
3
technologies
(3) ['HTML', 'CSS', 'JavaScript']

//unshift- will add the element at the beginning of the array
technologies.unshift('Python');
4
technologies
(4) ['Python', 'HTML', 'CSS', 'JavaScript']
//pop- will remove the last element from the array
technologies.pop();
'JavaScript'
shift- will remove the first element from the array
technologies.shift();
'Python'
technologies
(2) ['HTML', 'CSS']