// A. premative data types in js
//1.string
//2.number
//3.boolean
//4.undefined
//5.null
//6.symbol(ES6) signify unique value
//7.bigint(ES11) signify large integer value

//B. non-premative data type or reference data type
//1.object
//   array
//   function

const score=100
const scoreValue=100.43
 const isLoggedIn=false
    const outsideTemp=null

    const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)//false because symbol always unique value

const bigNumber=BigInt("123456789012345678901234567890")
console.log(bigNumber)



const  arr=["apple","banana","grapes"]// array datatype
console.log(arr)
console.log(typeof arr)

let  obj=({name:"rahul",age:24,isLoggedIn:true})//object datatype
console.log(obj)
console.log(typeof obj)


 function name(){
    console.log("hello rahul")
}//function datatype

name()

console.log(typeof name)    