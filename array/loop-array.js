var students = ["Alice", "Bob", "Charlie"];
for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}

students.forEach(function(item, index){
    console.log(index,item);

})

