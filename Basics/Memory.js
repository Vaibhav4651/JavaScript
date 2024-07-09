//Stack(Primitive data type) and Heap meamory(Non-Premitive data type)

let myYoutubename="vaibhav"

let anotherName = myYoutubename
anotherName="chai aur code"

console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email:"user@gmail.com",
    upi:"user@axl"
}

let userTwo=userOne

userTwo={
    email:"vaibhav@gmail.com"
}
console.log(userOne.email);
console.log(userTwo.email)