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

/*
try {
  adddlert("Welcome guest!");
} catch (err) {
  document.getElementById("demo").innerHTML = err.message;
}
console.log(err);




let x = 20;
try {
  if (x.trim() == "") throw "empty";
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x < 5) throw "too low";
  if (x > 10) throw "too high";
} catch (err) {
  message.innerHTML = "Input is " + err;
}
console.log("");
*/

/*
let carName = "volvo";

function A() {
  // let a = "greenLine";
  let a = 5;
  console.log(a);
}
A();

function A(a, b) {
  console.log(a + b);
}
A(10, 20);
*/

/*
let str = "heLLo";
if (0 > 5) {
  str = "petter";
}
console.log(str);


function myFunction() {
  let carName = "Volvo";
  document.getElementById("demo1").innerHTML = typeof carName + " " + carName;
}

document.getElementById("demo2").innerHTML = typeof carName;





let carName1 = "Volvo";

function myFunction() {
  let careName2 = "greenLine";
  console.log(carName1 + "" + careName2);
}


let carName = "Volvo";

function myFunction() {
  console.log("I can display " + carName);
}
myFunction();



// code here can use carName as a global variable
document.getElementById("demo").innerHTML = "I can display " + carName;

function myFunction() {
  carName = "Volvo";
}

myFunction();

*/

/*
x = 5;
console.log(x + 10);
var x;


x = 5;
console.log(x);
let x;


function A() {
  x = 5;
  console.log(x);
  let x;
}
A();


var x;
x = 5;
var y;
y = 7;
console.log(x, y);

console.log(str);
var str = "hello";

*/

/*
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());


console.log(this);

function A() {
  console.log(this);
}
A();


const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getFullName: function () {
    return this.fullName();
  },
};
console.log(person.getFullName());


const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person2 = {
  firstName: "John",
  lastName: "Doe",
};
console.log(person1.fullName.call(person2));
*/

/*
let arr = [];
arr[40] = "Hello";
console.log(arr[4]);

const hello = () => {
  return this;
};
console.log(hello());
*/

/*
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const car1 = new Car("Toyota", 2017);
console.log(car1);



class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const car1 = new Car("Toyota", 2017);
const car2 = new Car("Akt", 2019);
const car3 = new Car("BMW", 2000);
console.log(car1, car2, car3);




class Parson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  play() {
    console.log(`${this.name} is working & he is ${this.age} years old.`);
  }
}
const person1 = new Parson("Jon", 24);
const person2 = new Parson("DOn", 27);

person1.play();
person2.play();





*/

/*
let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
console.log(text);
console.log(obj.employees[2].lastName);

let person = {
  firstName: "Al Mamun",
  lastName: "Ridoy",
};
console.log(JSON.stringify(person));
*/

/*
class Parson {
  constructor(name, age) {
    this.name = name;
    debugger;
    this.age = age;
  }

  play(status) {
    debugger;
    console.log(
      `${this.name} is working & he is ${this.age} years old.But he plying very ${status}`
    );
  }
}
const person1 = new Parson("Jon");
const person2 = new Parson("DOn", 27);

person1.play("good");
person2.play("bed");
*/

/*
const arr = [1, 2, 3, 4, 5];

const length = arr.length;
for (let i = 0; i < length; i++) {
  console.log(i);
}
*/

/*
const sentence = "I am a programmer. My name is Ridoy. I love coding.";

const matches = sentence.match(/i/gi);
const ocurances = matches ? matches.length : 0;
console.log(ocurances);

let position = sentence.search(/ridoys/i);

position = position >= 0 ? position : "not found";

console.log(position);
*/

/*
function linearSearch(arr, val) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return "not found";
}
console.log(linearSearch(["a", "b", "c", "d", "c"], "c"));
*/

/*

function longestString(names) {
  let longestWord = "";

  for (name of names) {
    if (name.length > longestWord.length) {
      longestWord = name;
    }
  }
  return [longestWord, names.indexOf(longestWord)];
}
console.log(longestString(["Ridoy", "Kamal", "Dawloyer", "Rony"]));
*/

/*
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(`${i}is FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i}is Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}is Buzz`);
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(100);
*/

/*
const mixedArr = [
  "lws",
  undefined,
  "ridoy",
  false,
  "",
  "apple",
  true,
  "Thanks all",
  NaN,
];
// const trueArray = mixedArr.filter(function (el) {
//   if (el) {
//     return true;
//   } else {
//     return false;
//   }
// });

const trueArray = mixedArr.filter(Boolean);

console.log(trueArray);
*/

/*

*/

const obj = {
  a: "lws",
  b: undefined,
  c: "ridoy",
  d: false,
  e: "",
  f: "apple",
};

const truethyObject = function (obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
};

console.log(truethyObject(obj));
