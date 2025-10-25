"use strict"//treat all js code as modern js code

// alert("hello world !")//popup me show karega browser me


let name="rahul"//string datatype

let age=24//number datatype 

let isLoggedIn=true//boolean datatype

let state;//undefined datatype

let phoneNumber=null//null datatype


console.log(typeof name)//to know datatype of variableusing ||typeof|| operator
console.log(typeof age)
console.log(typeof isLoggedIn)
console.log(typeof state)
console.log(typeof phoneNumber)//show object because null is special case in js

// define data table formate 
console.table([name,age,isLoggedIn,state,phoneNumber])//show index no and value 

console.table([{name,age,isLoggedIn,state,phoneNumber}])//show key and value

console.table({name,age,isLoggedIn,state,phoneNumber})//show key and value in object formate

