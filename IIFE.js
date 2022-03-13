/* A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation. */

// Syntax
/* (function(){
    //...
})(); */

(function (num1, num2){
    console.log( num1 + num2);
})(10,20)

// Arrow IIFE function    
let iifeFunction = ((sum , sum1) =>{
 return sum * sum1;
})(10,10);
console.log(iifeFunction);