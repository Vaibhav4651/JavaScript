/*console.log(2>1);//Easy and we know these
*/

//Don't compare different data types
console.log("2" > 1);
console.log("02">1);


/* When we compare with the "NULL" with the numbers
   the compiler changes "NULL" to number and checks the comparision 
   And the NULL is treated as (0) 
   SO,NUll >= 0 IS TRUE here*/
/*console.log(null>0);
console.log(null==0);
console.log(null<0);
console.log(null>=0);*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === : Strictly check it also checks the data types of the comparison
console.log("2" == 2);
console.log("2" === 2);

console.log(NaN === 0);

console.log(null === 0);

/*Always write clean code to understanding*/