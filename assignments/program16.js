const prompt= require('prompt-sync')();

let num = parseInt(prompt("Enter a number:"));
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Entered number is a Prime number");
} else {
  console.log("Entered number is not a Prime number");
} 