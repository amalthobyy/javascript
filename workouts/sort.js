const prompt=require('prompt-sync')(); 
let  array=[1, 5, 2, 78, 23, 56, 45, 7, 9, 10];


for (let i=0;i < array.length-1;i++){
    for (let j=0;j<array.length-1-i;j++){
        if (array[j]>array[j+1]){
            let temp= array[j];
            array[j]=array[j+1];
            array[j+1]=temp;

        }
    }
}
console.log('sorted array',array);