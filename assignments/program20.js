const prompt=require('prompt-sync');

function printPattern() {
    let count = 1;
    for (let i = 1; i <= 4; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += count + "\t";
        count++;
      }
      console.log(row);
    }
  }
  
  printPattern();