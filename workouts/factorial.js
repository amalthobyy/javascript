const prompt=require('prompt-sync')();

let number=5;
let factorial=1;
for (let i=1;i<=number;i++){
    factorial*=i;
}
console.log(factorial);