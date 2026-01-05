/*
//use html line from 10-15
//data type

//string
let userName = "Qk";

//number
let age = 76;

//boolean
let gender = true;

console.log(typeof userName);
console.log(`my name is ${userName}`);
console.log(``);
console.log(typeof age);
console.log(`my age is ${age}`);
console.log(``);
console.log(typeof gender);
console.log(`and my gender is ${gender}`);

document.getElementById("Name").textContent = `my name is ${userName}`;
document.getElementById("age").textContent = `my age is ${age}`;
document.getElementById("gender").textContent = `my age is ${gender}`;
*/

/*
//arithmetic operator
let students = 30;

let addition = students + 2;
let subtraction = students - 2;
let multiplication = students * 2;
let division = students / 2;
let exponent = students ** 2;
let modulus = students % 2;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(exponent);
console.log(modulus);

//more simple way to use arimathic operator
students += 2;
students -= 2;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

//increment & decrement
students++;
students--;

//operator precedence
//starting from left to right
//    1. parenthesis ()
//    2. exponent
//    3. multiplication & division & modulus
//    4.addition $ subraction

let precedence = 1 + 2 - 2 * (10 - 2);
console.log(precedence);
*/

/* accepting user input
//use html line from 16-23
document.getElementById("submitName").onclick = function () {
  let username = document.getElementById("userName").value;

  if (!username) {
    window.alert(`state your username`);
    return;
  }

  window.alert(`Hello ${username}`);
};
*/

/*
//changing data type
const input = window.prompt("please enter your age");
function checkage() {
  if (input === null) {
    window.alert(`input cancelled`);
    return;
  }
  if (input === "") {
    window.alert(`please state your age`);
    return;
  }
  const age = Number(input);
  if (Number.isNaN(age)) {
    window.alert(`please state your age in number`);
    return;
  }
  window.alert(`your age is ${age}`);
}
checkage();
*/

/*
//using const
const PI = 3.14; //it is recommended to use all capital for const primitive data (number and boolean)
let radius = window.prompt(
  `please enter radius to calculate circumference of circle`
);
let circumference;
function circumferenceOfCircle() {
  if (radius === null) {
    window.alert(`input cancelled`);
    return;
  }
  else if (radius === "") {
    window.alert(`please state your radius`);
    return;
  }
  radius = Number(radius);
  else if (Number.isNaN(radius)) {
    window.alert(`please state your radius in number`);
    return;
  }
  circumference = 2 * PI * radius;
  window.alert(`your radius of circle is ${circumference}`);
}
circumferenceOfCircle();
*/

/* counting a number (increase and decrease)
use html line from 24-31
const deacreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
let counter = 0;

deacreaseBtn.onclick = function () {
  counter--;
  document.getElementById("counterValue").textContent = `${counter}`;
};
increaseBtn.onclick = function () {
  counter++;
  document.getElementById("counterValue").textContent = `${counter}`;
};
resetBtn.onclick = function () {
  counter = 0;
  document.getElementById("counterValue").textContent = `${counter}`;
};
*/

/*
//Math = built-in object that provide a collection of properties and methods

let testing = 3.256;
let x = 45;
let y = 2;
let z;

//z = Math.round(testing);      rounding a number
//z = Math.floor(testing);      rounds down to the nearest whole number
//z = Math.ceil(testing);       rounds up to the nearest whole number
//z = Math.trunc(testing);      removes the decimal part (keeps integer only)
//z = Math.pow(testing, y);     raises testing to the power of n (testingⁿ)
//z = Math.sqrt(testing);       square root of testing
//z = Math.log(testing);        natural logarithm of testing (base e)
//z = Math.sin(x);              sine of x (in radians)
//z = Math.cos(x);              cosine of x (in radians)
//z = Math.tan(x);              tangent of x (in radians)
//z = Math.abs(testing);        absolute value of testing (makes negative → positive)
//z = Math.sign(x);             returns sign of x (-1, 0, or 1)
//z = Math.max(testing, x, z);  returns the largest value among the numbers
//z = Math.min(testing, x, z);  returns the smallest value among the numbers

console.log(z);
*/

/* random generator
//use html line from 32-37
let randomButton = document.getElementById("roll");
let randomNum;

randomButton.onclick = function () {
  randomNum = Math.floor(Math.random() * 6) + 1;
  document.getElementById("randomValue").textContent = `${randomNum}`;
  console.log(randomNum);
};
*/

/* if statement
//use html line from 38-45
const ageValue = document.getElementById("userAge");
const ageSubmit = document.getElementById("submitAge");
let userAge;

ageSubmit.onclick = function () {
  let userAgevalue = ageValue.value;

  if (!userAgevalue.trim()) {
    window.alert("please enter your age in number");
    return;
  }

  let userAge = Number(userAgevalue);

  if (Number.isNaN(userAge)) {
    window.alert("please enter your age in number only");
    return;
  }

  if (userAge >= 130) {
    window.alert("how are you still alive");
  } else if (userAge >= 100) {
    window.alert("Damm you are very old");
  } else if (userAge >= 60) {
    window.alert("you are old");
  } else if (userAge >= 30) {
    window.alert("you are adult");
  } else if (userAge >= 20) {
    window.alert("you are still finding direction life");
  } else if (userAge >= 18) {
    window.alert("welcome to adult word");
  } else if (userAge >= 15) {
    window.alert("you are teenager");
  } else if (userAge >= 10) {
    window.alert("you are young");
  } else if (userAge >= 5) {
    window.alert("you are very young");
  } else if (userAge >= 0) {
    window.alert("you  just born");
  } else {
    window.alert("what");
  }
};
*/

/*
//.checked = property that determine the checked state of an
//           HTML checkbox or radio button element
//use html line from 46-60
const maleCheckBox = document.getElementById("maleCheckBox");
const femaleCheckBox = document.getElementById("femaleCheckBox");
const apacheCheckBox = document.getElementById("apacheCheckBox");
const submitCheckBox = document.getElementById("submitCheckBox");

submitCheckBox.onclick = function () {
  if (maleCheckBox.checked) {
    window.alert(`you're male`);
  } else if (femaleCheckBox.checked) {
    window.alert(`you're female`);
  } else if (apacheCheckBox.checked) {
    window.alert(`you're helicopter`);
  } else {
    window.alert(`please select something`);
  }
};
*/

// ? ternary operator = a shortcutto if {} and else{} statements
//                      help to assign a variable based on a condition
//                      condition ? codeIfTrue : codeIfFalse;

let no = 10;
let howmuch =
  no > 10 ? "the number is more than 10" : "the number is less than 10";
console.log(howmuch);

let price = 40;
let discount = price >= 50 ? 10 : 0;
console.log(`the price is ${price}`);
console.log(`your dicount is ${price * (discount / 100)}`);
console.log(`your total is ${price - price * (discount / 100)}`);

let human1 = true;
let species1 = human1 ? "human" : "not human";
console.log(`you're ${species1}`);

let human2 = false;
let species2 = human2 ? "human" : "not human";
console.log(`you're ${species2}`);
