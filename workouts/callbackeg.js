function greet(name,callback){
    console.log('hello', name);
    callback();

}
function sayGoodbye(){
    console.log("goodbye");
}
greet('amal',sayGoodbye);
