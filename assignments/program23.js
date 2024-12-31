const prompt=require('prompt-sync')();

class Array2D {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.arr = [];
    }
  
    getArray() {
      for (let i = 0; i < this.rows; i++) {
        this.arr.push([]);
        for (let j = 0; j < this.cols; j++) {
          this.arr[i].push(parseInt(prompt(`Enter value for arr[${i}][${j}]:`)));
        }
      }
    }
  
    displayArray() {
      for (let row of this.arr) {
        console.log(row.join("\t"));
      }
    }
  }
  
  function main() {
    let rows = parseInt(prompt("Enter the number of rows:"));
    let cols = parseInt(prompt("Enter the number of columns:"));
  
    let array = new Array2D(rows, cols);
    array.getArray();
    console.log("Array elements are:");
    array.displayArray();
  }
  
  main();