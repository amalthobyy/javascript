const prompt =require('prompt-sync')();

let str = prompt("Enter a string:");
let reversedStr = str.split("").reverse().join("");

if (str === reversedStr) {
  console.log("Entered string is a palindrome");
} else {
  console.log("Entered string is not a palindrome");
} 