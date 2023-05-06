// -----------------------------------------------Variables-------------------------------------------------------
// A variable is a container that stores data in memory that can be referenced by a name. In JavaScript, variables can be created using the var,
//let, or const keywords. Here is an example of how to declare a variable using var:

var a = 10 //global variable 
let b = "ten" //is the common method of calling variables and used the most. Js does not need any specific types for variables unlike any other languages
const c = false //constant variable that can not be changed afterwards.  

//------------------------------------------------Objects----------------------------------------------------------
// Objects are used to store key-value pairs. They are declared using curly braces and can contain any type of data. Here is an example:
const person = {
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


const animal = {
  dna:"abc123",
  legs:{
    front:2,
    back:3
  },
  sleep () {
    console.log("zzz")
  },
}

const dog = {
  bark() {
    console.log("woof")
  }
}

Object.setPrototypeOf(dog,animal)

console.log(dog.legs)



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


//----------------------------------------------Destructure-----------------------------------------------------------
const cat = {
  name: "puffi",
  type: "fatcat",
  speak () {
    console.log("meow")
  }
}

const { name: pname, type:ptype} = cat

console.log(pname)

const arr = ["apple","share","bear"]

const [fruit,verb,mamal] = arr

console.log(mamal)

//----------------------------------------------spread-----------------------------------------------------------
const obj1 = {
  first: 1,
  third: 4
}
const obj2 = {
  // ...obj1,
  second: 2,
  third:3,
  ...obj1
}

// const merge = {...obj1,...obj2}
console.log(obj2)

//----------------------------------------------nullish-----------------------------------------------------------

let x = ''
let y = x ?? "undefined" 
console.log(y)

//----------------------------------------------Array-----------------------------------------------------------

const testarr = [...Array(10).keys()]
let sum = 0;
for (num in testarr) {
  sum = sum + +num
}
console.log(sum)


const addArr = (arr) => {
  for (num in arr) {
    return sum = sum + +num
  }
}

console.log(addArr(testarr))

console.log(testarr.reduce((acc,cur) => acc + cur, 0 ))