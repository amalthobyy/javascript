const prompt=require('prompt-sync')();
let size = parseInt(prompt("Enter the size of the array:"));
let array = [];

console.log("Enter the values of array:");
for (let i = 0; i < size; i++) {
  array.push(parseInt(prompt()));
}

let evenCount = array.filter(num => num % 2 === 0).length;
console.log("Number of even numbers in the given array is " + evenCount)