const user ={
    userName:"Vaibhav",
    price : 199,
    
    welcomeMessagee:function(){
//when we have to reffer current context we use this keyword
        console.log(`${this.userName} , Welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessagee()
// /*Here we are changing the current context So it is printing SHREYAS
// So, (this) is used to reffer the current context*/
// user.userName = "Shreyas"
// user.welcomeMessagee()

// //It will give the empty object BCZ it reffers to the current context
// console.log(this);

// //We cant use this keyword in the functions Directly
// function chai(){
//     let userName="Vaibhav"
//     console.log(this.userName);

// }
// chai()

// const chai= () => {
//     let userName="Vaibhav"
//     console.log(this);
// }

// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,5));

/*If we have only one statement and we have to return it then we can write it to same line 
// and then we have to WRAP it into ( )  */
// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(6,5));

/*If we have to return object then we have to wrap also wrap the object into the 
( )*/
const addTwo = () => ({userName:"Vaibhav"})
console.log(addTwo())