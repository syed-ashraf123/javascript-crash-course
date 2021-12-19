// "+" Addition

var num1 = 4;
var num2 = 5;

var result = num1 + num2;

console.log(result);
console.log("This is " + "nothing");

// "-" Subtraction

result = num2 - num1;
console.log(result);

console.log("This" - "This");

// "*" Multiplication

result = num2 * num1;
console.log(result);
result = num1 * num2;
console.log(result);

console.log("T" * 20);
console.log(20 * "T");

var str = "ANy String";
console.log(20 * str);

// "**" Exponential

result = 4 ** 2;
console.log(result);
result = 4 ** 3;
console.log(result);

// "/" Division

result = 10 / 4;
console.log(result);

// "%" Modulus

result = 10 % 4;
console.log(result);

result = 13 % 5;
console.log(result);

// "=" Assignment operator

result = 5;
console.log(result);

//result=result+5
result += 5;
console.log(result);
// result=result*2
result *= 2;
console.log(result);

console.clear();

// "++" Increment operator

result = 5;
console.log(result);
result = result + 1;
console.log(result);
result++;
result++;
result++;
result++;

console.log(result);

// "--" Decrement operator

result = 5;
console.log(result);
result = result - 1;
console.log(result);
result--;
result--;
result--;
result--;

console.log(result);
result--;
console.log(result);

// "==" Equalto operator

num1 = 4;
num2 = 4;

console.log(num1 == num2);

str = "Hey";
str = "Hey!--=0-";

console.log(str == str);

num1 = 4;
num2 = 6;
result = num1 == num2;
console.log(result);

// "===" Equalto & type operator

num1 = 4;
num2 = "4";
console.log(num1 === num2);
console.log(num1 == num2);

// "!=" Not equalto operator

num1 = 4;
num2 = 4;

console.log(num1 != num2);

// "!==" Not equaltto & type operator

num1 = 4;
num2 = "4";

console.log(num1 !== num2);
console.log(!true);
console.log(!false);

// ">" Greater operator

num1 = 4;
num2 = 4;

console.log(num1 > num2);
console.log(num1 >= num2);

// "<" Lessthan operator

num1 = 3;
num2 = 4;

console.log(num1 < num2);
console.log(num1 >= num2);

// "?" Ternary operaotor

num1 = 7;
num2 = false ? 6 : 4;
console.log(num2);

// "&&" "||" "!"
