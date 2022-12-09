/* console.log("hello");
console.log("hello");
console.log("hello"); */

// let a = 'Bangladesh';

// let sentence = `I love ${a} it is a big country`;

function getRenNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRenNumber(1,6));

const student = ["Ridoy", "Kamal", "Faroque", "Nayem", "Asrafull"];
// console.log(student.sort());

const roll_numbers = [223, 344, 453, 56, 3434, 565, 57, 345];
// console.log(roll_numbers.sort(function (a, b) {
//     return a - b;
// }));

function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
} // console.log(leapYear(2016));

const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowel(sentence) {
  let count = 0;
  const letters = Array.from(sentence);

  letters.forEach(function (value, index, array) {
    if (vowel.includes(value)) {
      count++;
    }
  });
  return count;
}
// console.log(countVowel("I love Bangladesh"));

const numbers = [1, 54, 5, 4, 5, 2, 56, 44, 44, 56, 99, 99];

const duplicates = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

// console.log(duplicates);

const number = [1, 54, 5, 4, 5, 2, 56, 44, 44, 56, 99, 99];

const unique = number.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});

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

let age = 17;

console.log(age >= 18 ? "you are adult!" : "you are not adult");
