const score = 200;
console.log(score);

//o/p ->  [Number: 100000] this will definitly give you the number 
const balance = new Number(100000)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(3))//To fixed madhe point yetet

const otherNumber = 123.66863
console.log(otherNumber.toPrecision(3))//Makes round off the number

const hunderds = 10000000;
console.log(hunderds.toLocaleString())//Gives comma like indian system

/*  MATHS   */

console.log(Math)

console.log(Math.abs(-4));//Absolute value -ve to +ve vice versa not possible
console.log(Math.round(7.5))

console.log(Math.ceil(4.2))//Celing Function
console.log(Math.floor(4.99));

console.log(Math.sqrt(625));
console.log(Math.pow(2,10));

console.log(Math.min(5,1,0,2,5));

console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min))
