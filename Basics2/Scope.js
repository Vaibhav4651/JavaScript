/*Var is dont have scope it can be access anywhere
in the file
So, we mostly use LET and CONST*/

//Before {..} is defined is GLOBALLY Scoped

/*if(true){//Everything in the if is BLOCK SCOPE
    var c = 30
    let a=10
    const b= 20
}


//console.log(a);
//console.log(b);
console.log(c);*/


//Nested Scope childcan access parent element But parent cant access chlid
function One(){
    const userName = "Vaibhav"

    function Two(){
        var website="Youtube"
        console.log(userName);
    }
   // console.log(website);
    Two()
}
One()

if(true){
    const userName="Vaibhav"
    if(userName === "Vaibhav"){
        const website = " YouTube"
        console.log(userName+website);
    }
    //console.log(website);
}

//console.log(userName);


// +++++++++++++++++ Interesing +++++++++++++++++

function addOne(num){
    return num+1
}

addOne(5)

//Thw given function can said to be VARIABLE    
/*HOSTING we can not call function without initializing when we decleare the 
function by using variables*/
const addTwo = function(num){
    return num+2
}
addTwo(5)

