// let arr:Array<Number | String> =[1,2,3 , "AAAA"];

// console.log(arr);

// let arr = [1,2,3]
// arr.push(5);
// //arr.push("d"); //cannot push string to number arrray
// console.log(arr);


let arr:Array<Number|String> = [1,2,3]
arr.push(5);
arr.push("d"); //You can explicityly tell which types of element can an array have.
console.log(arr);