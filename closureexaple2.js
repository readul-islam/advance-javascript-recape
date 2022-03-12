
const myFunction = () =>{
    let i = 0;
    let total = 1;
    let dataPrivecy = () =>{
      i = i + 1;
        return total*=i;
      
    }
    return dataPrivecy;
}
const callFunction = myFunction();

// JavaScript closures in a loop
// for (var index = 1; index <= 3; index++) {
//     setTimeout(function () {
//         console.log('after ' + index + ' second(s):' + index);
//     }, index * 1000);
// }

for (let i = 1; i <= 5; i++){
    setTimeout(function () {
        // console.log('output' + i + 'secode after');
    }, (5000*i))
}


for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}

