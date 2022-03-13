/* JavaScript functions can return a single value. To return multiple values from a function, you can pack the return values as elements of an array or as properties of an object and you can apply destructuring syntax */

const fullName = () => {
  let firstName = "Akash";
  let lastName = "Mahamud";
  return [firstName, lastName];
};
// acess by array
const getName = fullName();
let name = getName[0] + " " + getName[1];
console.log(name);

[firstName, lastName] = getName;
console.log(firstName + " " + lastName + " " + "is junior developer");

const getObject = () => {
  let firstName = "Abdul";
  let lastName = "Alim";
  return { firstName: firstName, lastName: lastName };
};
const getMultiValue = getObject();
console.log(getMultiValue.firstName);
 let {fristName, lastName} = getMultiValue


const arr = (num) =>{
    if(num < 1){
        return 1;
    }
    else{
        return num * arr(num-1)
    }
}

