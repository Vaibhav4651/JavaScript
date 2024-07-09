/* Data types
    1.Primitive :- 7Types ->
                    1.String
                    2.Number
                    3.Boolean
                    4.Null
                    5.Undefined (memory and space is decleared but value is not present )
                    6.Symbol (Used for making any value as an unique)
                    7.BigInt
    2.Non-Primitive OR Refrence type :- 
            Array
            Objects
            Functions

JS is Dynamically Typed language 
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//Defination of Symbol
const id = Symbol("123")
const anotherId=Symbol("123")

console.log(id === anotherId);
console.log(typeof id);

const bigNumber=256445165696316448555456n
console.log(typeof bigNumber);

// Non-Primitive 

const heros=["Shaktiman","nnagraj","doga"]

let myObj= {
    name: "Vaibhav",
    age: 21
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);
console.log(typeof myObj);