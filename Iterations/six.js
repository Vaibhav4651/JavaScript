//const coding = ['js','pythom','c','c++','java'];


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// /* For Each loop doesn't return values */

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter( (num ) => {
//     //Scope open kela nantar return karna compulsory ahe 
//     return num > 4
// } )
// console.log(newNums);


// const newNums = []

// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    {title : "bookOne",genre : "Math" ,Publish : 1999,edition:2001},
    {title : "bookTwo",genre : "Science" ,Publish : 1996,edition:2010},
    {title : "bookThree",genre : "History" ,Publish : 1935,edition:2013},
    {title : "bookFour",genre : "English" ,Publish : 2006,edition:2014},
    {title : "bookFive",genre : "Math" ,Publish : 2004,edition:2024},
    {title : "bookSix",genre : "Math" ,Publish : 2006,edition:2022},
    {title : "bookSeven",genre : "science" ,Publish : 1999,edition:2001},    
]

// const newBooks = books.filter( (bk) => bk.genre === "Math");
// console.log(newBooks);

const userBooks = books.filter( (bk) => {
    return bk.Publish >= 2001  && bk.genre === "Math"})

console.log(userBooks);