const course={
    courseName:"Js In Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

console.log(course.courseInstructor)


//We are saving the value in the object as an variable to access it easily 

const {courseInstructor:instructor} = course/*Here we have done the restructuring the
Object which is easy to write(ACCESS) the object again and again*/

console.log(instructor);

//API

// {
//     "name" : "Vaibhav",
//     "courseName" : "Js in Hindi",
//     "price":"Free"
// }


