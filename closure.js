// closure return a function 
function myFunction (nume){
    function nameFunction(){
        return nume * 5;
    }
  return nameFunction;
}

const getFunction = myFunction(5);


const isFunction = getFunction();

console.log(isFunction);
console.log(isFunction);
