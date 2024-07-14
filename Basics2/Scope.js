/*Var is dont have scope it can be access anywhere
in the file
So, we mostly use LET and CONST*/

//Before {..} is defined is GLOBALLY Scoped

if(true){//Everything in the if is BLOCK SCOPE
    var c = 30
    let a=10
    const b= 20
}


//console.log(a);
//console.log(b);
console.log(c);