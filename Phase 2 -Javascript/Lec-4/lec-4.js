// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
// Total = hours of lec remaining 470
// 1.28
// 1- Prototype

// Object.prototype.chai = function () {
//   console.log("Chai");
// };
// const arr = [1, 2, 3];

// if (!Array.prototype.fill) {
//     // FallBack - PolyFill - Backup Function
//     Array.prototype.fill = function(){

//     }
// }

// arr.fill()
// const str = "Piyush"

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const originalArr = this; // Current Object ki taraf point karta hai

    for (let i = 0; i < originalArr.length; i++) {
      userFn(originalArr[i], i);
    }
  };
}

const arr = [1, 2, 3, 4, 5, 6];

// Error: .map function does not exist on arr variable

// Real Signature ko samjo - no return, function input, value, index

// Real Signture ko samjo - No return, function input, value, index
// calls my fn for every value

const ret = arr.forEach(function (value, index) {
  console.log(`Value at Index ${index} is ${value}`);
});
console.log(`Ret is`, ret);
