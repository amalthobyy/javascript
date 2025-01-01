const prompt=require('prompt-sync');

const arr= [12,3,45,6,7,12,4,3];
const res=[];
for (let x of arr){
    if (res.includes(x)){
        continue
        
    }
    res.push(x)

}
console.log(res);