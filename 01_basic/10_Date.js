//dates

let date = new Date();
console.log(date.toString()); //current date and time
console.log(date.toDateString()); //current date
console.log(date.toLocaleString());//current date and time in locale format
console.log(typeof date);//object

console.log(date.toTimeString()); //current time

let CreatMydate=new Date('2023,3,21,10:33:00');


console.log(CreatMydate.toLocaleString());



let myDate= Date.now();
console.log(myDate);//milliseconds since january 1, 1970

let newDate=new Date();
console.log(newDate.getDay());//day of the week
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);//month is 0-indexed
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds()); 


// *****************complex topic *******************
