const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc/*accumulator*/ , currentValue) {
//     console.log(`acc ${acc} and current value is ${currentValue}`);
//     return acc+currentValue;
// } , 0)


const myTotal = myNums.reduce( (acc,curr) => acc+curr ,0)

console.log(`Total value is ${myTotal}`);

const shoppingCart = [
    {
        itemName : "Js Course",
        price : 299
    },
    {
        itemName : "Mobile Dev Course",
        price : 5999
    },
    {
        itemName : "Data Sciece Course",
        price : 12999
    },
    {
        itemName : "C Course",
        price : 1999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0/*Initial value to pay in the total value*/)

console.log(priceToPay);