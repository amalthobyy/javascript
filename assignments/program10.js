const prompt=require('prompt-sync')();
let size = parseInt(prompt("Enter the size of arrays:"));
let array1 = [];
let array2 = [];

// Input Array 1
console.log("Enter the values of Array 1:");
for (let i = 0; i < size; i++) {
  array1.push(parseInt(prompt()));
}

// Input Array 2
console.log("Enter the values of Array 2:");
for (let i = 0; i < size; i++) {
  array2.push(parseInt(prompt()));
}

// Swapping arrays
let temp = [...array1];
array1 = [...array2];
array2 = temp;

console.log("Arrays after swapping:");
console.log("Array1:", array1);
console.log("Array2:", array2); 