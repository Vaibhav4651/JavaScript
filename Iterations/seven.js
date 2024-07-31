const myNums = [1,2,3,4,5,6,7,8,9,10]

//Here the scope is not opened 
//const newNums = myNums.map( (num) => num+10 )

//If we use Scope then we have to use the return function like given below
//Same for the FILTER also
// const newNums = myNums.map( (num) => { return num+10} )
// console.log(newNums);


//We can apply Map on Map {It is known as chaining}
const newNums = myNums
.map((num) => num*10)
.map((num) => num+1)
.filter((num)=> num>51)
console.log(newNums);