// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function Scope: ", a, b, c);
// }

// test();

// if (true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("If Scope: ", a, b, c);
//   }

var a = 1;
let b = 2;
const c = 3;

let d = a + b++
// console.log(b)
console.log(d)
// for(var a = 0; a<10; a++){
//     console.log('Loop: ',a)//0 a 9
// }
// console.log("Global Scope: ", a, b, c);//9,2,3
