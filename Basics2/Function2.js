//Here we are using [...x]-> Rest Operator to combine all elements in one array
function calculateCartPrice(val1,val2,...num1){
    return num1//at a one tome we can return only one value
}
console.log(calculateCartPrice(200,300,400,556,542));


// const user={
//     userName:"Vaibahv",
//     price:199
// }
/*we have to use parameter value to call the value of Objects
Like anyobject.userName*/
function handleObject(anyobject){
    console.log(`User Name is ${anyobject.userName} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    userName : "Vaibahv",
    price:199
})

const myNewArray =[200,300,400,500,600]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray))