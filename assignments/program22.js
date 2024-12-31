const prompt=require('prompt-sync')();

function getArray(rows, cols) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
      arr.push([]);
      for (let j = 0; j < cols; j++) {
        arr[i].push(parseInt(prompt(`Enter value for arr[${i}][${j}]:`)));
      }
    }
    return arr;
  }
  
  function addArrays(arr1, arr2, rows, cols) {
    let result = [];
    for (let i = 0; i < rows; i++) {
      result.push([]);
      for (let j = 0; j < cols; j++) {
        result[i].push(arr1[i][j] + arr2[i][j]);
      }
    }
    return result;
  }
  
  function displayArray(arr) {
    for (let row of arr) {
      console.log(row.join("\t"));
    }
  }
  
  function main() {
    let rows = parseInt(prompt("Enter the number of rows:"));
    let cols = parseInt(prompt("Enter the number of columns:"));
  
    console.log("Enter values for array 1:");
    let arr1 = getArray(rows, cols);
  
    console.log("Enter values for array 2:");
    let arr2 = getArray(rows, cols);
  
    let result = addArrays(arr1, arr2, rows, cols);
  
    console.log("Sum of arrays:");
    displayArray(result);
  }
  
  main();