var str = "I'm a person";
console.log(String(str));

var num = 6;
console.log(num);
console.log(typeof num);
num = String(num);
console.log(num);
console.log(typeof num);

num = 44;
console.log(num);
num = num.toString();
console.log(num);

num = null;
console.log(num);

num = String(num);
console.log(num);
// num = null.toString();
console.log(num);

var str = "this is str";
str = Number(str);
console.log(str);

str = "458";
str = Number(str);
console.log(str);

num = 789.78595;
console.log(num);

num = parseInt(num);
console.log(num);

num = 4.45;
num = parseFloat(num);
console.log(num);
