const prompt = require("prompt-sync")();

let name = prompt("hi, what's your name?")
console.log("Oh, so you are " + name + " it's nice to meet you, "+ name)
let age = prompt("and how old are you?"); 
console.log("and you are " + age + " years old. that's amazing.")

if (age <18 ) {
    console.log("looks like you're not old enough to vote and drink")
}
else if (age >= 18 && age < 21) {
    console.log("looks like you're old enough to vote but not drink")
}
else{
    console.log("congratulations, you're old enough to vote and drink")
}