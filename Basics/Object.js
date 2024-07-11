//Objects can be decleared as 1)literals and 2)constructors
//Singleton -> Object made by constructor


//Object.create -> Singleton 

//Declearing Symbol
const mySym = Symbol("key1")

//Creating the Object
const JsUser={
    name:"Vaibhav",//key:"Values"
    "Full Name":"Vaibahv Vyenkatrao Shingte",
    age: 21,
    [mySym]:"myKey1",
    email:"Vaibahv@google.com",
    location:"Nanded",
    lastLoginDays:["Monday","Saturday"],
    isLoggedIn:false
}

//Accessing the object
console.log(JsUser.email);

/*The given below can be Print for the expressions like FULL NAME
We cant access the Double quote values by the "."*/
console.log(JsUser["email"]);

console.log(JsUser[2]);//Printing Undefined
console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);//To access symbol as a symbol we have to define it in the [] Brackets
console.log(typeof JsUser[mySym]);

//Update the values in Object
JsUser.email = "Vaibahv@gmail.com"

//Here we used the freeze keyword to dont allow to make the changes in the object which we have to freeze
//Object.freeze(JsUser)
JsUser.email="SHreyas@gmail.com"
console.log(JsUser);

//Adding functions in the object 
JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());

JsUser.greetinTwo = function(){
    console.log(`Hello JS User my name is ${this["Full Name"]}`);
}
console.log(JsUser.greetinTwo());

//Check the SYMBOL in the Object which is required for Interview