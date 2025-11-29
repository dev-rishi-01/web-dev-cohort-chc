// 1- example
// const person = {
//   x: 10,
//   firstname: "Piyush",
//   lastname: "Garg",
//   hobbies: ["Coding", "Gym"],
//   isMarried: false,
//   hasGf: false,
//   hasCrush: Infinity,
//   getFullname: function () {
//     return "Hitesh Sir";
//   },
//   address: {
//     bldno: 1,
//     streetno: 1,
//     countryCode: "IN",
//     state: "Punjab",
//   },
// };

// console.log(person.hobbies);          // ['Coding','Gym']
// console.log(person.getFullname());    // Hitesh Sir
// console.log(person.address.state);    // Punjab
// console.log(person.address.xxyyzz);   // undefined

// const remote = {
//   color: "black",
//   brand: "XYZ",
//   dimensoin: {
//     height: 1,
//     width: 1,
//   },
//   turnOff: function () {},
//   volumeUp: function () {},
// };

// 2-
// let fname = "Hitesh";
// let fname2 = fname;

// console.log(`This is fname: ${fname}`);
// fname = "Piyush";

// console.log(`This is fname: ${fname}`);

// // 3- example

// let p1 = {
//   fname: "Hitesh"
// };
// let p2 = p1;

// p2.fname = "Piyush Garg"

// console.log(p2)       // { fname: "Piyush Garg" }
// console.log(p1)       // { fname: "Piyush Garg" }
// p1 and p2 are two names for the same object, so changing one also changes the other.

// 4- example

// let p1 = {
//   fname: "Hitesh",
//   lname: "Sir",
// };
// let p2 = {
//   fname: p1.fname,
//   lname: p1.lname,
// };
// p2.fname = "Piyush ";
// p2.lname = "Garg ";

// console.log(p1);      //{ fname: 'Hitesh', lname: 'Sir' }
// console.log(p2);      //{ fname: 'Piyush ', lname: 'Garg ' }

// 5- example

// let p1 = {
//   fname: "Hitesh",
//   lname: "sir",
// };

// let p2 = {
//   ...p1, //spread Operator ....
// };
// p2.fname = "Piyush";
// console.log(p1);      // { fname: 'Hitesh', lname: 'sir' }
// console.log(p2);      // { fname: 'Piyush', lname: 'sir' }

// 6- example

// let p1 = {
//   fname: "Hitesh",
//   lname: "Sir",
//   address: {
//     h: 1,
//     s: 1,
//   },
// };

// let p2 = {
//   fname: p1.fname,
//   lname: p1.lname,
//   address: p1.address,
// };

// p2.fname = "Piyush";
// p2.lname = "Garg";

// console.log(p1);
// console.log(p2);
// Output
// { fname: 'Hitesh', lname: 'Sir', address: { h: 1, s: 1 } }
// { fname: 'Piyush', lname: 'Garg', address: { h: 1, s: 1 } }

// 7- Example

// let p1 = {
//   fname: "Hitesh",
//   lname: "Sir",
//   address: {
//     h: 1,
//     s: 1,
//   },
// };

// let p2 = {
//   ...p1,
// };

// p2.fname = "Piyush";
// p2.address.h = "Hacked";

// console.log(p1);
// console.log(p2);
// Output
// { fname: 'Hitesh', lname: 'Sir', address: { h: 'Hacked', s: 1 } }
// { fname: 'Piyush', lname: 'Sir', address: { h: 'Hacked', s: 1 } }

// Example : 8
let p1 = {
  fname: "Hitesh",
  lname: "Sir",
  address: {
    h: 1,
    s: 1,
  },
};

let p2 = {
  ...p1,
  address: {
    ...p1.address,
  },
};

p2.fname = "Piyush";
p2.address.h = "Hacked"; // cannot hack p1's address object

console.log(p1);
console.log(p2);
// Ouput
// { fname: 'Hitesh', lname: 'Sir', address: { h: 1, s: 1 } }
// { fname: 'Piyush', lname: 'Sir', address: { h: 'Hacked', s: 1 } }


// Example : 9
// let p1 = {
//   fname: "Hitesh",
//   lname: "Ch",
//   address: {
//     h: 1,
//     s: 1,
//   },
// };

// const p1String = JSON.stringify(p1);
// console.log(p1String);

// let p2 = JSON.parse(p1String);

// p2.fname = "Piyush";
// p2.address.h = "Hacked";

// console.log(p1);
// console.log(p2);

// Objects - Need to read about it on Online
