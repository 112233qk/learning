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
document.getElementById("submit").onclick = function () {
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
  if (radius === "") {
    window.alert(`please state your radius`);
    return;
  }
  radius = Number(radius);
  if (Number.isNaN(radius)) {
    window.alert(`please state your radius in number`);
    return;
  }
  circumference = 2 * PI * radius;
  window.alert(`your radius of circle is ${circumference}`);
}
circumferenceOfCircle();
*/

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
