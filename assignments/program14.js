const prompt = require('prompt-sync')();
let size = parseInt(prompt("Enter the size of arrays:"));
let array1 = [];
let array2 = [];

// Input Array 1
console.log("Enter the values of array 1:");
for (let i = 0; i < size; i++) {
  let row = [];
  for (let j = 0; j < size; j++) {
    row.push(parseInt(prompt()));
  }
  array1.push(row);
}

// Input Array 2
console.log("Enter the values of array 2:");
for (let i = 0; i < size; i++) {
  let row = [];
  for (let j = 0; j < size; j++) {
    row.push(parseInt(prompt()));
  }
  array2.push(row);
}

// Adding arrays
let sumArray = [];
for (let i = 0; i < size; i++) {
  let row = [];
  for (let j = 0; j < size; j++) {
    row.push(array1[i][j] + array2[i][j]);
  }
  sumArray.push(row);
}

console.log("Sum of 2 arrays is:");
console.log(sumArray);