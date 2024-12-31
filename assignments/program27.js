const prompt=require('prompt-sync')();

function myFilter(myArray, callback) {
    let sum = 0;
    for (let num of myArray) {
        sum += num;
    }
    return callback(sum) ? sum : 0;
    }
    
    let result = myFilter([1, 2, 3, 4, 5], (sum) => sum % 2 === 0);
    console.log(result);