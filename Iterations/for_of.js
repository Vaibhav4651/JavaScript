// *********** for - of **********

// //Syntax
// for (const iterator of object) {
    
// }

const myArr = [1,2,3,4,5]

for (const Value of myArr) {
    //console.log(Value);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(greet);
}

// Maps


/*Only unique values DUPLICATE values are not allowed in Map()
it is not iteratable by anything*/

const newMap = new Map()
newMap.set('IN','INDIA')
newMap.set('US','UNITED STATES OF AMERICA')
newMap.set('Fr','FRANCE')
//console.log(newMap);

for (const [key,Value] of newMap) {
   // console.log([key, ':-' ,Value]);
}


/*For-Of loop is not iteratable by object*/

// const myObj = {
//     game1 : 'nfs',
//     game2 : 'spiderman'
// }

// for (const [game,value] of myObj) {
//     console.log(game , ':-' , value);
// }

const myObj ={
    js: "JavaScript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
  //  console.log(`${key} Shortcut is for ${myObj[key]}`);
}


const programming = ['c','c++','Java','python','ruby']

for (const key in programming) {
    //console.log(programming[key]);
}