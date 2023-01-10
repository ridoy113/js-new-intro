/* console.log("hello");
console.log("hello");
console.log("hello"); */

// let a = 'Bangladesh';

// let sentence = `I love ${a} it is a big country`;

// function getRenNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// // console.log(getRenNumber(1,6));

// const student = ["Ridoy", "Kamal", "Faroque", "Nayem", "Asrafull"];
// // console.log(student.sort());

// const roll_numbers = [223, 344, 453, 56, 3434, 565, 57, 345];
// // console.log(roll_numbers.sort(function (a, b) {
// //     return a - b;
// // }));

// function leapYear(year) {
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// } // console.log(leapYear(2016));

// const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowel(sentence) {
//   let count = 0;
//   const letters = Array.from(sentence);

//   letters.forEach(function (value, index, array) {
//     if (vowel.includes(value)) {
//       count++;
//     }
//   });
//   return count;
// }
// // console.log(countVowel("I love Bangladesh"));

// const numbers = [1, 54, 5, 4, 5, 2, 56, 44, 44, 56, 99, 99];

// const duplicates = numbers.filter(function (value, index, array) {
//   return array.indexOf(value) !== index;
// });

// // console.log(duplicates);

// const number = [1, 54, 5, 4, 5, 2, 56, 44, 44, 56, 99, 99];

// const unique = number.filter(function (value, index, array) {
//   return array.indexOf(value) === index;
// });

// console.log(unique);

// let x = 6;
// let y = "6";

// console.log(x==y);
// let x = 6;
// let y = "6";

// console.log(x===y);

// let age = 18;

// if(age >=18){
//     console.log("you are adult!");
// }

// let age = 17;

// if(age > 18){
//     console.log("you are adult!");
// }else{
//     console.log("you are not adult");
// }

// let age = 32;

// // console.log(age >= 18 ? "you are adult!" : "you are not adult");
// console.log(
//   age >= 18 ? (age < 30 ? "you are adult!" : "you are old!") : "you are young!"
// );

// console.log(2 < 8);

// let age = "10";

// age = Number(age);

// if (isNaN(age)) {
//   voteable = "Input is not a number";
// } else {
//   voteable = age < 18 ? "Too young" : "Old enough";
// }

// console.log(voteable);

// let age = "40";

// if (age < 18) {
//   console.log("You are young!");
// } else if (age == 18) {
//   console.log("Welcome to adult world");
// } else if (age > 18 && age < 30) {
//   console.log("You are mature");
// } else {
//   console.log("you are old");
// }

// const cars = ["A", "B", "C", "D", "E"];

// let i = 0;
// for (; ; i++) {
//   if (i > 10) {
//     break;
//   } else {
//     console.log(i);
//   }
// }
// console.log("i am done");

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
// console.log(text);

// const mySet = new Set();

// mySet.add("a");
// mySet.add("b");
// mySet.add("c");
// mySet.add("d");

// console.log(mySet);

// Create a Set

/*
const letters = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
letters.forEach(function (value) {
  text += value;
});

console.log(letters.values);
*/

/*
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
*/

// let text = "";
// for (const x of fruits.entries()) {
//   text += x;
// }
// console.log(text);
// List all entries
// let text = "";
// fruits.forEach(function (value, key) {
//   text += key + " = " + value;
// });
// console.log(text);
// fruits.delete("apples");
// console.log(fruits.has("apples"));
// console.log(fruits.set("apples", 200));
// console.log(fruits.size);

// console.log(Number("     "));
// console.log(parseFloat("3"));
// console.log(parseFloat("3.2"));
// console.log(parseInt("3"));

/*
let x = "5";
let y = +x;
console.log(y);
*/

// console.log(String(22 + 85));
// console.log(typeof String(22 + 85));
/*
let a = 10e6;
console.log(typeof a.toExponential());
*/
// console.log(!false);

// -----RegExp-----
/*
let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n);
let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
console.log(n);
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result);
let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");
console.log(result);
*/


