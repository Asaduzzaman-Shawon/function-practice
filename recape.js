// function isEven(num){
//     if(num % 2 ===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(8))
// console.log(isEven(88))
// console.log(isEven(7))
// console.log(isEven(9))


function uf(num1, num2){
    const jog = num1 + num2;
    const biyog = num1 - num2;
    const gun = jog * biyog;
    return gun;
}

// uf(10, 5)

const man = uf(10,5);
console.log(man);