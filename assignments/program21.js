const prompt= require('prompt-sync')();

function multiplyAdjacent() {
    let size = parseInt(prompt("Enter the array limit:"));
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(parseInt(prompt(`Enter value for index ${i}:`)));
    }
  
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
      result.push(arr[i] * arr[i + 1]);
    }
  
    console.log("Resulting array: " + result.join("\t"));
  }
  
  multiplyAdjacent()