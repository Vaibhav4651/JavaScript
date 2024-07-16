//Immediately invoked Function Expression (IIFE)


//Given IIFE function is Named IIFE
(function chai(){
    console.log(`DB connected`);
})();

/*
() -> First paranthesis for function call
() -> execution of the function*/

/*If we have to call another IIFE function then we have to terminate
first invoved function by using the semicolon
If we dont terminate then the next function will definately show error*/

// (function aurCode(){
//     console.log(`DB connected`);
// })()


//Here we are taking the arrow function
//Unnamed IIFE
((name)=>{
    console.log(`DB connected to ${name}`);
})("Vaibhav")