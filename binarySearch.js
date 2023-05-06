// //array to generate random numbers
// // const inputArr = Array.from({length:10}, () => Math.floor(Math.random() * 10))
// // inputArr.sort()
// const inputArr = [0,1,2,3,4,5,6,7,8,9]
// const num = 3


// const binarySearch = (arr) => {
//     let low = 0
//     let high = arr.length - 1

//     while (true) {
//         let mid = Math.floor((low + high) / 2)
//         if(num === mid) {
//             console.log("it's a match: " + mid )
//             break
//         } else if (num > mid) {
//             low = mid + 1
//         } else if (num < mid) {
//             high = mid - 1
//         } else {
//             console.log("number not in array")
//         }
//     }

// }

// binarySearch(inputArr)
const prompt = require("prompt-sync")();
let inputArr = []
let size = parseInt(prompt("enter the amount of numbers you want to use"))
for (i=0;i<size;i++){
    inputArr[i] = parseInt(prompt("enter the number["+i+"] for the array"))
}
inputArr.sort()
let num = parseInt(prompt("enter the number you want to search for"))


const binarySearch = (arr,val) => {
            
        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {
            const mid = (low + high) >>> 1;

            if (arr[mid] === val) {
                return mid;
            } else if (arr[mid] < val) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
    }

    return -1;
    
}

const index = binarySearch(inputArr,num);
if (index!==-1) {
    console.log("the number " + num +" is found at index " + index + " in the array");
} else {
    console.log("the number " + num +" is not found in the array");
}
