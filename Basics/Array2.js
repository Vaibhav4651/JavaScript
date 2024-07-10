const marvel_heros = ["Thor","Iron-Man","Spider-Man"]
const dc_heros = ["Superman","Flash","Batman"]

//It doesnt merge araay in array 
marvel_heros.push(dc_heros)//It takes the array as an element
console.log(marvel_heros);

/*We use this to access flash beacuse the .push() method doesnt merge arrays
it gives the dc_heros as an the 3rd element of an array*/
console.log(marvel_heros[3][1]);

For adding both the arrays we have to concat the arrays by using the new variable
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

//This is the spread operator which is more reliable than the concat operator
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);


//Flat is used for concatination of arrays which is very easy and simple
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5,]]]
const usable_array = another_array.flat(Infinity)
console.log(usable_array);


console.log(Array.isArray("Vaibhav"));//Checks the wprd is available in array or not
console.log(Array.from("Vaibahv"));//Splits the word in the form of elements

//Intresting
console.log(Array.from({name:"Vaibhav"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));