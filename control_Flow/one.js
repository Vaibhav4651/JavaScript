//if

const isLoggedIn = true
const temperature = 41

// if(2 === '2'){
//     console.log("Executed");
// }

/*Logical Operators
< , > , <= , >= , == , ====(it also checks the value as well as the 
data type of the element to get the true or false) , != ,!== */

// if(temperature === 41){
//     console.log("Less than 50");
// }
// else{
//     console.log("Greater than 50");
// } 

// const score = 200 
// if (score > 100) {
//     const power = "Fly"
//     console.log(`User power : ${power}`);
// }

//console.log(`User power : ${power}`);/*It will give error for the scope*/

//Short Hand Notation

const balance = 1000

// if (balance > 500) {
//     console.log("test");
// }

// if (balance < 500) {
//     console.log("Less than 500");
// }
// else if(balance < 750){
//     console.log("Less than 750");
// }
// else if (balance < 900) {
//     console.log("Less han 900");
// }
// else{
//     console.log("Less than 1200");
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard ) {
    console.log('allow to buy courses');
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}