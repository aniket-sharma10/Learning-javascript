
// Objects created using Object() constructor are singleton objects

let obj = new Object()

// Defining attributes of obj
// obj.id = 2;

obj={
    email: "example.com",
    // This is nesting.. defining object inside another object
    fullname: {
        firstname: "aniket",
        lastname: "sharma"
    }
}
// console.log(obj)
// console.log(obj.fullname)
// console.log(obj.fullname.firstname)

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "c", 4: "d"}
let obj3 = {5: "e", 6: "f"}


// To combine two objects
// let resObject = Object.assign(obj1, obj2)       //but this also modifies obj1 and puts obj2 into it
// console.log(resObject)
// console.log(obj1)

// to combine objects without modifying existing objects
// let resObject2 = Object.assign({}, obj1, obj2, obj3)
// this treats new empty object {} as target and puts all objects there;
// console.log(resObject2)

// Better way of doing this is with spread operator
// let resObject3 = {...obj1, ...obj2, ...obj3}
// console.log(resObject3)

let student= {
    name: "aniket",
    rollno: "99",
    email: "example@google.com",
    loggedin: true
}

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))

// To check if a key exists inside a object.. it returs a boolean value
console.log(student.hasOwnProperty('emailid'))