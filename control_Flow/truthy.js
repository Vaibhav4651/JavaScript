const userEmail = function(){}
if (userEmail) {
    console.log("Got uer Email");
}
else{
    console.log("Don't have user Email");
}

/*
falsy values -> 
    false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

truthy values ->
    true , 1 , "0" , "false" , " " , [] ,{} , function(){} 
*/ 

/* If we have to check the array is empty or not we 
have to check using the arrayName.length*/

/*For the Object we have to convert it into the array first
For that -> Object.keys(emptyObj).length */

/*Nullish  Coalescing operator(??): NUll Undefined   -> 
    If we have null or undefined we and we used ?? with the function and
    the function returns any value then the value will be assigned to the 
    variable If No value gets frome Function or from database then we will 
    assign => The NULL or UNDEFINED
*/

let val1;

//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15//Which value gets first it will get assign

console.log(val1);


/* Terniary Operator -> 
    condition ? true : false
*/

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");