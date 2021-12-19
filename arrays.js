// Arrays
// Array is group of elemnts.

var fruit1 = "Mango";
var fruit2 = "Banana";
var fruit3 = "Orange";

var fruits = [];
console.log(fruits);
fruits = ["Mango", "Banana", "Orange"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);

fruits[0] = "Apple";
console.log(fruits);
fruits[2] = "Kiwi";
console.log(fruits);
fruits[3] = "Mango";
console.log(fruits);
// fruits[15] = "Coconut";
console.log(fruits);

console.log(fruits.length);
fruits[fruits.length] = "Coconut";
console.log(fruits);
fruits[fruits.length] = "Pineapple";
console.log(fruits);

fruits.push("Item3");
console.log(fruits);

fruits.push("Item101");
console.log(fruits);

// Deletion

fruits.pop();
console.log(fruits);

// delete fruits[1];
// console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

fruits.splice(3, 2);
console.log(fruits);

fruits.splice(2, 1, "Banana");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(0, 0, "Apple");
console.log(fruits);

console.clear();
console.log(fruits);

// console.log(fruits.slice(1, 3));

console.log(fruits.sort());
console.log(fruits.reverse());

var arr = ["item", "item23", fruits];
console.log(arr);

console.log(arr[2][1]);
