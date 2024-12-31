const prompt= require('prompt-sync')();

function calculateTax() {
    let income = parseFloat(prompt("Enter the annual income:"));
  
    let tax = 0;
  
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = income * 0.05;
    } else if (income <= 1000000) {
      tax = income * 0.20;
    } else if (income <= 5000000) {
      tax = income * 0.30;
    }
  
    console.log(`Income tax amount = ${tax.toFixed(2)}`);
  }
  
  calculateTax()