const prompt= require('prompt-sync')();


class Calculator {
    addition(a, b) {
      return a + b;
    }
    
    subtraction(a, b) {
      return a - b;
    }
    
    multiplication(a, b) {
      return a * b;
    }
  
    division(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return "Cannot divide by 0";
      }
    }
  }
  
  function main() {
    let calc = new Calculator();
    let choice = parseInt(prompt("Choose operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
  
    switch (choice) {
      case 1:
        console.log("Result: " + calc.addition(num1, num2));
        break;
      case 2:
        console.log("Result: " + calc.subtraction(num1, num2));
        break;
      case 3:
        console.log("Result: " + calc.multiplication(num1, num2));
        break;
      case 4:
        console.log("Result: " + calc.division(num1, num2));
        break;
      default:
        console.log("Invalid choice");
    }
  }
  
  main();