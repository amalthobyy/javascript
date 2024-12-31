const prompt=require('prompt-sync')();
let strings="hello how are you";
let words=strings.split(' ');
let result='';
for (let i=0;i<words.length;i++){
    let reverse='';
    for (let j=words[i].length-1;j>=0;j--){
        reverse +=words[i][j];
    }
    result +=reverse+(i<words.length-1? " ":"");
}

console.log(result);