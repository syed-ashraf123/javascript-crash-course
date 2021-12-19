// "If" only runs when conditions become "true"
// "Else" runs only when if is not true
var age = null;
console.log("Before if");
if (false) {
  console.log("Inside if condition");
  age = 24;
}
console.log("After if", age);

// 0===false
// Others numbers are true
//Strings are always true
// Arrays are true
// Objects are also true

if (0) console.log("CHecking NUmber condition");
if (78) console.log("CHecking NUmber condition");
if ("A") console.log("String is true");
if ([122, 23, 23, 4]) console.log("Array is true");
if ({}) console.log("Objects are also treue");

// Else
var condition = false;
if (condition) console.log("It's a true condition");
else {
  console.log("It's a false");
}

// Nested IF-else

// Someone is going to bar
age = 5;

if (age < 0) {
  console.log("You are a person");
} else {
  if (age > 18) {
    console.log("You can drink");
  } else {
    console.log("You are too small");
  }
}

// Other conditions

var money = true;
var age = 18;
if (money && age >= 18) console.log("Come IN in and condition");
if (money || age >= 18) console.log("Come IN in or condition");
