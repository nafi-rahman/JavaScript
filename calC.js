const prompt = require("prompt-sync")();

let amount = +prompt("how many numbers do you want to operate on?")
let op = +prompt("enter 1 to add, 2 to subtract, 3 to multiply, 4 to divide")
let sum = 0 


let add = (num) => { return sum = sum + num }

let sub = (num) => { return sum = sum - num }

let mul = (num) => { 
    return sum = sum * num }

let div = (num) => { 
    return sum = sum / num }

if(op === 1) {
    for(i=1;i<=amount;i++){
        let number = +prompt("enter number" + i)
        add(number)
    }
    
} else if(op === 2) {
    for(i=1;i<=amount;i++){
        let number = +prompt("enter number" + i)
        sub(number)
    }
} else if(op === 3) {
    sum = 1 
    for(i=1;i<=amount;i++){
        let number = +prompt("enter number" + i)
        mul(number)
    }
}else if(op === 4) {
    sum = 1 
    for(i=1;i<=amount;i++){
        let number = +prompt("enter number" + i)
        div(number)
    }
}

console.log(sum)

console.log(sum)