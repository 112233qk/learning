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
//use html line from 17-24
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
use html line from 26-33
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
//use html line from 35-40
let randomButton = document.getElementById("roll");
let randomNum;

randomButton.onclick = function () {
  randomNum = Math.floor(Math.random() * 6) + 1;
  document.getElementById("randomValue").textContent = `${randomNum}`;
  console.log(randomNum);
};
*/

/* if statement
//use html line from 42-49
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
//use html line from 51-65
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

/*
// ? ternary operator = a shortcut to if {} and else{} statements
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
*/

/*
// SWITCH = can be an efficient replacement to many else if statements
let day = 1;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("sunday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thrusday");
    break;
  case 6:
    console.log("friday");
    break;
  case 7:
    console.log("saturday");
    break;
  default:
    console.log(`${day} this is not a day`);
}

let score = "jkhkjashdf";
let resultTest;
let resulAnswer;

switch (true) {
  case score >= 70:
    resultTest = "Pass";
    console.log(`your score is ${score}`);
    break;
  case score < 70:
    resultTest = "fail";
    console.log(`your score is ${score}`);
    break;
  default:
    console.log(`${score} is not a test score`);
}
if (resultTest === undefined) {
  console.log("there is a error in the score");
} else {
  console.log(`you ${resultTest} the test`);
}
*/

/*
// string methods = allow to manipulate and work with text (strings)
let resultString = function (StringMethod) {
  console.log(StringMethod.length); //13
  // returns the number of characters in the string
  console.log(StringMethod.charAt(2)); // A
  // returns the character at index 2
  console.log(StringMethod.indexOf("D")); // 8
  // returns the first position of "d" in the string
  console.log(StringMethod.lastIndexOf("A")); // 2
  // returns the last position of "d" in the string
  console.log(StringMethod.length); // 13
  // again returns the string length
  console.log(StringMethod.trim()); // Abc  Defg
  // removes spaces from the beginning and end of the string
  console.log(StringMethod.toUpperCase()); //   ABC  DEFG
  // converts the string to uppercase
  console.log(StringMethod.toLowerCase()); //   abc  defg
  // converts the string to lowercase
  console.log(StringMethod.repeat(2)); //   Abc  Defg    Abc  Defg
  // repeats the string 2 times
  console.log(StringMethod.startsWith("S")); // false
  // checks if the string starts with "S"
  console.log(StringMethod.startsWith(" ")); // true
  // checks if the string starts with a space
  console.log(StringMethod.endsWith("S")); // false
  // checks if the string ends with "S"
  console.log(StringMethod.endsWith(" ")); // true
  // checks if the string ends with a space
  console.log(StringMethod.includes("S")); // false
  // checks if the string contains "S"
  console.log(StringMethod.includes(" ")); // true
  // checks if the string contains a space
  console.log(StringMethod.replaceAll("A", "S")); //   Sbc  Defg
  // replaces all "A" characters with "S"
  console.log(StringMethod.padStart(15, "S")); // SS  Abc  Defg
  // pads the start of the string with "S" until length is 15
  console.log(StringMethod.padEnd(15, "S")); //  Abc  Defg  SS
  // pads the end of the string with "S" until length is 15
  console.log(StringMethod);
};
resultString("  Abc  Defg  ");
*/

/*
//Method chaining = calling one method after another
//                  in one continuous line of code.
let username = window.prompt("name pleawse");

if (!username) {
  window.alert("ERROR");
  console.log(`${username}`);
} else {
  username =
    username.trim().charAt(0).toUpperCase() +
    username.trim().slice(1).toLowerCase();
  window.alert(`hello ${username}`);
}
*/
/*
// Logical operator = used to combine or manipulate boolean values (true or false)

                      AND = &&
                      OR  = ||
                      NOT = !
function nomerLogicalOperation(value) {
  if (!value) {
    console.log(`error "${value}" is not a number `);
    return;
  } else {
    console.log(`fine ${value} is a number`);
  }

  if (value <= 10 && value >= 0) {
    console.log("around 0-10");
  } else {
    console.log("not aroun 0-10");
  }

  if (value <= 0 || value >= 10) {
    console.log("around 0-10");
  } else {
    console.log("not around 0-10");
  }
}
nomerLogicalOperation(5);
nomerLogicalOperation(123);
nomerLogicalOperation(-123);
nomerLogicalOperation(false);
*/

/*
//STRICT EQUALITY
//   = assigment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if value & datatype are equal)
//  != inequality operator
// !== strict inequality operator

function strictEquality(value) {
  if (value == 10) {
    console.log(`${value} is 10`);
  } else {
    console.log(`false`);
  }

  if (value === 10) {
    console.log(`${value} is 10 in NUMBER`);
  } else {
    console.log(`false`);
  }

  if (value != 10) {
    console.log(`${value} is not 10`);
  } else {
    console.log(`${value} is 10`);
  }

  if (value !== 10) {
    console.log(` ${value} is not 10`);
  } else {
    console.log(` ${value} is 10 in number`);
  }
}
strictEquality(10);
strictEquality(15);
*/

/*
//while loop = repeat some code WHILE some condition is true

function whileLoop() {
  let value;

  do {
    value = window.prompt("please enter value");
  } while (value === null || value.trim() === "");

  window.alert(`your value is ${value}`);
}

whileLoop();
*/

/*
// for loop = repeat some code a LIMITED amount of times

function forWhile() {
  for (let i = 0; i <= 10; i++) {
    if (i == 5) {
      continue;
    } else {
      console.log(i);
    }
  }
}
forWhile();
*/

/*
//use html line from 67-74
const playGame = document.getElementById("playGame");
const submitAnswer = document.getElementById("submitAnswer");

playGame.onclick = function () {
  window.alert("let the game begin");
  const minNumb = 1;
  const maxNumb = 10;
  let answer = Math.floor(Math.random() * (maxNumb - minNumb + 1) + minNumb);
  let attempts = 0;

  submitAnswer.onclick = function () {
    let answerValue = document.getElementById("userAnswer");
    guessValue = answerValue.value;

    attempts++;
    guess = Number(guessValue);
    // if the value is nan remind the user
    if (isNaN(guess) || guess < minNumb || guess > maxNumb) {
      window.alert("please put a value between 1 - 10");
      attempts++;
    }
    // else proceed
    else {
      if (guess > answer) {
        window.alert("the number is to HIGH!");
      } else if (guess < answer) {
        window.alert("the number is to LOW!");
      } else {
        window.alert(
          `you guess ${answer} is correct your attempt is ${attempts}
          to restart click play`
        );
      }
    }
    // console.log(answer);
    answerValue.value = "";
  };
};
*/

/*
//function = A section of usable code.
//           Declare code once, use it whenever you want
//           Call the function to execute that code.

function Math(x, y) {
  let result = x + y;
  return result;
}
let MathResult = Math(10, 5);
console.log(MathResult);
*/

function Array() {
  let fruits = ["apple", "coconut", "banana"];

  function indexFruits() {
    let fruits = ["apple", "coconut", "banana"];

    console.log(fruits.length);

    console.log(fruits.indexOf("coconut"));

    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[2]);
  }

  function push() {
    let fruits = ["apple", "coconut", "banana"];

    console.log("push");
    fruits.push("hello");
    // add element
    console.log(fruits);
  }

  function pop() {
    let fruits = ["apple", "coconut", "banana"];

    console.log("pop");
    fruits.pop();
    //removes last element
    console.log(fruits);
  }

  function unshift() {
    let fruits = ["apple", "coconut", "banana"];

    console.log("unshift");
    fruits.unshift("hello");
    //add element to beginning
    console.log(fruits);
  }

  function shift() {
    let fruits = ["apple", "coconut", "banana"];

    console.log("shift");
    fruits.shift();
    //remove element from beginning
    console.log(fruits);
  }

  function arrayFor() {
    let fruits = ["apple", "coconut", "banana"];

    console.log("Forloop");
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }

    console.log("");

    for (let i = fruits.length - 1; i >= 0; i--) {
      console.log(fruits[i]);
    }

    console.log("");
    for (let fruit of fruits) {
      console.log(fruit);
    }
  }

  function sort() {
    let fruits = ["apple", "coconut", "banana"];

    fruits.sort();
    console.log(fruits);

    fruits.sort().reverse();
    console.log(fruits);
  }

  //indexFruits();
  //console.log("");
  //console.log("unchangeArray");
  //console.log(fruits);
  //console.log("");
  //push();
  //console.log("");
  //pop();
  //console.log("");
  //unshift();
  //console.log("");
  //shift();
  //console.log("");
  //arrayFor();
  //console.log("");
  //sort();
}
Array();
