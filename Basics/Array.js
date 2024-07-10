//Array
//Array can contain any type of values in it 

const myArr = [0,1,2,3,4,"Vaibhav"];
console.log(myArr[2]);

const myHeros = ["Shaktiman","Doremon"]
const myArr2 =new Array(1,2,2,4)
console.log(myArr2);

//Array methods
console.log(myArr.length);

myArr2.push(6)
console.log(myArr2);

myArr.pop()
console.log(myArr);

//Adding the values at the start of the array
myArr.unshift(0)
console.log(myArr);

//Removes the first element in the array 
myArr2.shift()
console.log(myArr2);

//Slice splice
console.log("a",myArr);

const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

//Sploce removes the existing elements in the main array
const myn2=myArr.splice(1,3)
console.log(myn2);
console.log(myArr2);

x=myArr.toLocaleString()
console.log(typeof x);