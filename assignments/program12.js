const prompt=require('prompt-sync')();
let size = parseInt(prompt("Enter the size of the array:"));
let array = [];

console.log("Enter the values of array:");
for (let i = 0; i < size; i++) {
  array.push(parseInt(prompt()));
}

array.sort((a, b) => b - a);
console.log("Sorted array:", array);