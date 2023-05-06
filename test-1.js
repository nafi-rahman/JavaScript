// -----------------------------------------------Variables-------------------------------------------------------
// A variable is a container that stores data in memory that can be referenced by a name. In JavaScript, variables can be created using the var,
//let, or const keywords. Here is an example of how to declare a variable using var:

var a = 10 //global variable 
let b = "ten" //is the common method of calling variables and used the most. Js does not need any specific types for variables unlike any other languages
const c = false //constant variable that can not be changed afterwards.  

//------------------------------------------------Objects----------------------------------------------------------
// Objects are used to store key-value pairs. They are declared using curly braces and can contain any type of data. Here is an example:
let person = {
    hand:2,
    head:1,
    tail:"none",
    hasAjob: false
}

person["height"] = 5

console.log(person["height"])

for(let prop in person) {
  console.log(prop +":"+ person[prop])
}

//----------------------------------------------Functions-----------------------------------------------------------
// Functions are blocks of code that perform a specific task. They can be declared using the function keyword. 
// Here is an example of a function that takes two numbers as arguments and returns their sum:

function add(a,b) {
    return a + b
}

console.log(add(3,3))

//----------------------------------------------Conditional Statements-----------------------------------------------------------
var age = 27;

if (age < 18) {
  console.log("You are too young to vote.");
} else if (age >= 18 && age < 21) {
  console.log("You can vote but cannot drink alcohol.");
} else {
  console.log("You can vote and drink alcohol.");
}

