const myarr=[9,8,7,5,3,2,1];

const myarr2=[5,6,7,8,8,9,10];

myarr.push(myarr2);//adds entire array as single element

console.log(myarr);

 const  allrr=myarr.concat(myarr2);//does not modify original array
console.log(allrr);


const allarr2=[1,2,3,[4,5,[6,5,6,1],8],7,8,];
console.log(allarr2.flat(Infinity));//flattens nested arrays up to specified depth



console.log(Array.from("suman rahul"));//creates array from iterable object like string

console.log(Array.from({name:"rahul"}));//creates array from object with length property thats gave empty arrya because no  find values


let a=100;
let b=200;
let c=300;
const myarr3=Array.of(a,b,c);//creates array from given arguments
console.log(myarr3);