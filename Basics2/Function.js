function sayMyName(){
    console.log("V");
    console.log("a");
    console.log("i");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("V");
}
//sayMyName();

// function addTwoNumbers(number1,number2)
// {

//     console.log(number1+number2)
// }
//addTwoNumbers(9,2)//Arguments
//addTwoNumbers(5,"a")//Concate the Two numbers 5a will be the output
//addTwoNumbers(6,null)//Giving that number which we have passed


//After RETURN we cant define any thing and it wont execute
function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}
const result = addTwoNumbers(6,6)
//console.log("Result:",result);

function loginUserMesasge(userName = "Vai"){
//!userName is used to say no user name is defined
    if(!userName){
        console.log("Please enter the userName");
        return
    }
    return `${userName} jsut logged in`
}
//If we dont pass any value then the username will be undefined
console.log(loginUserMesasge("Vaibahv"));
