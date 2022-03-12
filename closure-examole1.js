function myFunction(num1){

    function muti(num2){
        return num1 *  num2;
    }
    return muti;
}

const acceptV = myFunction(10);
console.log(acceptV);
const multiCall = acceptV(22);
console.log(multiCall);