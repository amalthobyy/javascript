const prompt= require('prompt-sync')();

function getArray() {
    let array = [];
    let size = parseInt(prompt("Enter the size of the array:"));
    console.log("Enter the values of array:");
    for (let i = 0; i < size; i++) {
      array.push(parseInt(prompt()));
    }
    return array;
  }
  
  function displayArray(array) {
    console.log("Array values:", array);
  }
  
  function main() {
    let array = getArray();
    displayArray(array);
  }
  
  main()