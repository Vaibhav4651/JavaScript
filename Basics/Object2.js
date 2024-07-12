//When we print direct object without the values it gives the empty Object
const tinderUser = new Object()
//console.log(tinderUser);

//const tinderUser = {} -> Object 
tinderUser.id = '123abc'
tinderUser.name='Vaibhav'
tinderUser.isLoggedIn=false

//console.log(tinderUser);

/*Here we are declearing the object inside the 
object where we are also accessing the nested objects one by one*/
const regularUser ={
    email:"Vaibhav@gmail.com",
    fullName : {
        userFullName : {
            firstName :"Vaibhav",
            lastName:"Shingte"
        }
    }
}

//console.log(regularUser.fullName.userFullName);

const obj1 ={ 1:"a",2:"b",}
const obj2 ={3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}
//const obj3 ={obj1,obj2}//Combining thw two objects like an array 

/*Here we are using the object to combine the Two objects 
The empty bracket gives assurence that the object will be stored in the brecket*/
/*If we dont give the empty paranthesis then the objects will
store in the first object which is written in the console*/
//const obj3 = Object.assign({},obj1,obj2,obj4)


//We will mostly use the spread Operator to assign OR Concate the Objects
const obj3={...obj1, ...obj2, ...obj4}
//console.log(obj3);

console.log(tinderUser);
//We will get the KEYS and the VALUES in the form of the ARRAY
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//Entries is less used
console.log(Object.entries(tinderUser));

/*The given below statement is used to check whether the object contain
that proprty or not*/
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

