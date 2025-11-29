/* ******function (this is know as parameter)   */
function prepareChai(type) {
  if (type === "Masala Chai") {
    console.log("Adding spices to the chai");
  } else {
    console.log("Preparing regular chai");
  }
}

// ********(this is known as argument that you have passed)
prepareChai("Masala Chai");
prepareChai("Ginger Chai");

// Ek online store mein, agar customer ka total bill amount 1000 se zyada hai, toh 10% discount milta hai. Nahi toh, full amount pay karna padta hai.

// function calculateTotal(amount) {
//   // convert to number
//   if (amount > 1000) {
//     return amount * 0.9;
//   }
//   return amount;
// return amount > 100 ? amount * 0.9 : amount;

// }

// let finalBill = calculateTotal(1200);
// console.log(`You need to pay ${finalBill}, after 10% discount`);

// console.log(`You need to pay ${calculateTotal(1400)} ,after 10% discount`);

// // Ek Traffic light system mein, agar light "red" hai, toh "Stop" print karo.. Agar "yellow" hai, toh "Slow down" print karo, agar "green" hai, toh "GO" print karo

// function trafficLight(color) {
//   switch (color) {
//     case "red":
//       break;
//       console.log("STOP");
//     case "yellow":
//       console.log("SLOW DOWN");
//       break;
//     case "red":
//       console.log("GO");
//       break;
//     default:
//       console.log("Chalan kaat do");
//       break;
//   }
// }
// trafficLight("yellow");

// function checktruthyValue(value) {
//   if (value) {
//     console.log("Truthy");
//   } else {
//     console.log("Falsy");
//   }
// }

// checktruthyValue(1); //Truthy
// checktruthyValue(0); //Falsy
// checktruthyValue("hitesh"); //Truthy
// checktruthyValue(""); // Falsy
// checktruthyValue([]); // Truthy
// checktruthyValue([1, 2, 3]); //Truthy

function login(username, password) {
  if (username === "admin" && password === "1234") {
    console.log("login successful");
  } else {
    console.log("Invalid Credentials");
  }
};

login("admin","1234")