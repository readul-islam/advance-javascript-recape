// this.x = 9;    // 'this' refers to global 'window' object here in a browser
// const module = {
//   x: 81,
//   getX: function() { return this.x; }
// };

// module.getX();
// //  returns 81

// const retrieveX = module.getX;
// retrieveX();
// //  returns 9; the function gets invoked at the global scope

// //  Create a new function with 'this' bound to module
// //  New programmers might confuse the
// //  global variable 'x' with module's property 'x'
// const boundGetX = retrieveX.bind(module);
// boundGetX();
// //  returns 81

this.name = "Akash Mahamud";
const object = {
  name:'Abdul Alim',
  massage:function() {
      return this.name
  }
  
};
let test=object.massage();
console.log(test);

const friend = {
    name:'Jubyer Ahamed',

}
const binding = object.massage.bind(friend);
let result =binding();
console.log(result);

let ami = object.massage;
const result1 = ami();
console.log(result1);

const callmathod = object.massage.call(friend);
console.log(callmathod);

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log(arr); 
