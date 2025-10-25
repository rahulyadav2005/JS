//arrays

const myarr=[1,2,3,4,5];
console.log(myarr);

console.log(myarr[3]);


//methods of array
myarr.push(7);
console.log(myarr);
myarr.pop();
console.log(myarr);

myarr.unshift(8);//add at the beginning
console.log(myarr);

myarr.shift();//remove from the beginning
console.log(myarr);

console.log(myarr.includes(8));//boolean check

console.log(myarr.indexOf(4));//index of element


const newarr=myarr.join();
console.log(newarr);//string of array elements

// slice,splice
const myarr2=myarr.slice(1,4);//does not modify original array
console.log(myarr2);
console.log(myarr);

const myarr3=myarr.splice(1,2);//modifies original array
console.log(myarr3);
console.log(myarr);
