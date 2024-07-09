//Dates
//Defined from jan 1st 1970 

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());//Time in the IST
console.log(myDate.toLocaleString());//Time in the proper format
console.log(typeof myDate);//The date is an object type

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

myCreatedDate = new Date(2023,0,23,5,6)
console.log(myCreatedDate.toLocaleString());//Proprt format in date and time with hr , min 

myCreatedDate = new Date('2023-01-23');
console.log(myCreatedDate.toLocaleDateString());//In this format the month starts from the 1 not from 0

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

//Get date month year by get method
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

//String interpolation
console.log(`${newDate.getFullYear()} and the time is ${newDate.getTime()}`)

//toLocaleString()
newDate.toLocaleString('default',{weekend:"long"});
