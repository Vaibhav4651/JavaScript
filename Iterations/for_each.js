const coding = ['js','pythom','c','c++','java'];

//call back function(FOR EACH)

/* We have give them a function and they are smart
to calculate the things like length and all 
forEach is aslo a call back function*/

/* in call back function the function dont have the name 
so we have to give only parameter */

//the example is given below

// coding.forEach( function (item) {
//     console.log(item);
// } )

/* Another Variation */

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach( printMe )

/* In for each loop we can print index and the whole array */

// coding.forEach( (item , index , arr) => {
//     console.log(item , index , arr);
// } )

const myCoding = [
    {
        langName : "JavaScript",
        languageFileName : "Js"
    },

    {
        langName : "Java",
        languageFileName : "Java"
    },

    {
        langName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( ( item ) => {
    console.log(item.langName);
} )