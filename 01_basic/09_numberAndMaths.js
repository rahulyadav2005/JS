const score=400;
console.log(`my Score is ${score }`);
console.log(typeof score);//to know datatype of variable
const balance=new Number(100)
console.log(balance)
console.log(balance.toFixed(2))

const hundred=100000;
console.log(hundred.toLocaleString("en-IN"));//to convert number into local string format


// ******************************Math Object******************************
console.log(Math.PI);//to know value of pi


console.log(Math.E);//to know value of euler's number   


console.log(Math.round(4.6))//to round number to nearest integer

console.log(Math.floor(4.9))//to round number to lower integer

console.log(Math.ceil(4.1))//to round number to upper integer

console.log(Math.trunc(4.9))//to remove decimal part

console.log(Math.pow(2,3))//to calculate power value

console.log(Math.sqrt(64))//to calculate square root value


console.log(Math.abs(-55))//to convert negative number into positive number

console.log(Math.min(2,3,4,5,-1,0))//to know minimum value

console.log(Math.max(2,3,4,5,-1,0))//to know maximum value

console.log(Math.random()*1000)//to generate random number between 0 to 1

console.log(Math.floor(Math.random()*10)+1)//to generate random number between 1 to 10

console.log(Math.floor(Math.random()*100)+1)//to generate random number between 1 to 100

