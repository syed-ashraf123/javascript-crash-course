// Lenght

var str = "This is Javascript";

var res = str.length;
console.log(res);

// Indexing

console.log(str[0]);
console.log(str[1]);
console.log(str[8]);

console.log(str.charAt(10));

// Slice
var str = "This is Javascript";

res = str.slice(0, 4);
console.log(res);
res = str.slice(4, 8);
console.log(res);
res = str.slice(8, 18);
console.log(res);

res = str.slice(-10, -6);
console.log(res);
res = str.slice(-10);
console.log(res);

res = str.slice(6);
console.log(res);

res = str.slice(12);
console.log(res);

// substring

res = str.substring(12);
console.log(res);

res = str.slice(0, 4);
console.log(res);

res = str.substring(0, 4);
console.log(res);

// substr

res = str.substr(8, 4);
console.log(res);

res = str.substr(12, 6);
console.log(res);

res = str.substr(12);
console.log(res);
console.clear();

// includes

str = "This is Javascript. This is CSS";
res = str.includes("Javascript");
console.log(res);

res = str.includes("Javascript", 18);
console.log(res);

// replace

str = "This is Javascript. This is Javascript";
res = str.replace("Javascript", "HTML");
console.log(res);

res = str.replace("Javascript1", "HTML");
console.log(res);

res = str.replace("Javascript", "HTML");
console.log(res);

res = str.replace(/Javascript/g, "HTML");
console.log(res);

// uppercase & lowercase

str = "This is Javascript. This is Javascript";

res = str.toLowerCase();
console.log(res);

res = str.toUpperCase();
console.log(res);

// Concatination

str = "Hello";
console.log("Hello " + "World");

res = str.concat(" ", "World!");
console.log(res);

res = str.concat(" ", "World!", " OKOK");
console.log(res);

// Trim

str = "    Hello Syed Zano, How are you?     ";
console.log(str.trim());

console.log(str.trimEnd());
console.log(str.trimStart());

// Split

str = "Java,C++,C,Python";

console.log(str.split(","));

str = "Hello how-are you";
console.log(str.split("-"));

// Searching

str = "This is Javascript";
res = str.indexOf("is");
console.log(res);

res = str.indexOf("Java");
console.log(res);

res = str.indexOf("is", 4);
console.log(res);

res = str.lastIndexOf("is");
console.log(res);

console.log(str.startsWith("Hello"));
console.log(str.endsWith("script"));

console.log(str.search("Java"));
