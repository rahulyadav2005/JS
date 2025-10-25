//stack ---> premitive data type
//heap ---> non-premitive data type


let myName="rahulvnss@zohomail.in"//string stored in stack memory
console.log(myName)
let anotherName=myName
anotherName="rahulvns atgmail.com"; //new string stored in stack memory
console.log(anotherName)



let userOne={userName:"rahul",age:24, upi:"rah@oksbi"}//object stored in heap memory
console.log(userOne)    
let userTwo=userOne
userTwo.userName="suman"//change value in same memory location
console.log(userTwo);
console.log(userOne);//userOne also change because both are pointing to same memory location in heap

// stack me jis valuse ko change karenge to dusre variable me change nahi hoga
// heap me jis valuse ko change karenge to dusre variable me bhi change hoga because both pointing to same memory location