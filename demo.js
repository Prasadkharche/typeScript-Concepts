// let num:Number =54;
// console.log(num);
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
var json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);