// For
// While
// Do-While

// for-in
// for-of

// For Loops

// for(statement 1;statement 2;statement 3){

// }

// for(STARTING VALUE;ENDING VALUE;CHANGING VALUE){

// }

// 1,2,3,4,5
// 1.5,2.0,2.5,3.0
// 1.1,1.2,1.3

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(2 * i);
}

console.clear();

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(2 * i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(2 * i);
}
