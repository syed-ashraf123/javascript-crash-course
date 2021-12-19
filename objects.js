var name = "Syed";
var clg = "IU";
var city = "LKO";

var myDetails = {
  name: "Syed",
  clg: "IU",
  city: "LKO",
};

console.log(myDetails.name);
console.log(myDetails["name"]);
console.log(myDetails.clg);
console.log(myDetails);

// Adding Data

myDetails.country = "IND";

console.log(myDetails);

// Delete
delete myDetails.city;

console.log(myDetails);

// Array of objects

var arr = [
  {
    name: "Syed",
    clg: "IU",
    city: "LKO",
  },
  {
    name: "Ashraf",
    clg: "IUL",
    city: "MUM",
  },
];

console.log(arr);

// Declairing empty
var obj = {};

obj.game = "cricket";

console.log(Object.keys(myDetails));
console.log(Object.values(myDetails));
