//var,let,const

//var

var box;
console.log(box);
box = 6;
console.log(box);
box = "Something Else";
console.log(box);
box = "6";
console.log(box);
box = 6;

var box2 = 10;
console.log(box2);

console.log(box + box2);
var box3 = box + box2 + 10;
console.log(box3);

var str =
  "uyfghjkrtgujklyrdtgujlkytdfyghijokpytdguj;ol;'utfyghijokfddhgjhjl;hgdjhlkhggjkl;'gfjhgjlk;jhkhkk";

console.log(str);

// const

const a = 10;
console.log(a);
// a = 20; You can't overwrite constant variable
console.log(a);

const name = "Syed Zano";
console.log(name);

const x = name + 20;
console.log(x);

//
const lastName = "Zano";

{
  let firstName = "Syed";
  console.log(firstName);
  console.log(lastName);
}

// console.log(firstName);
console.log(lastName);
