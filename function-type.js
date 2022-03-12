//1. javascript advance topic function  type 
/* In javascript ,all  function are object.
function has two important properties they are (length) and (prototype). 
1.length--the length property dependent on function number of arguments  
2.prototype--prototype are referance actual function*/


function add(x, y){
    return x + y;
}
// console.log(add.length);
// console.log(add.prototype);

/* normal call function 
 
let result =new add(10,20);
console.log(result);*/

// use constructor new keyword 
// let result = new add(10,20);
// console.log(result); 

function obj(x, y){
    // console.log(new.target);
    return x + y;
}
const result =new obj(10,20);

// fuction methods apply, call , bind 
// 1.apply method passed array arguments  
const friend = {name:'Abdul Alim', passion:'student'};
const friends = function(id, roll){
    console.log('id:', id, '\n', 'Roll:',roll, '\n', this.name + ' ' + this.passion);
}
// friends.apply(friend,[101,454545]);
// 2.call method same as apply method but arguments sparate by comma 
friends.call(friend, 101, 454545)

/* 3. bind mathod return a new function  this very important method please chack it aging*/

let car = {
    speed: 5,
    start: function() {
        console.log('Start with ' + this.speed + ' km/h');
    }
};
let aircraft = {
    speed: 10,
    fly: function() {
        console.log('Flying');
    }
};
let test =car.start.bind(aircraft);
test();

