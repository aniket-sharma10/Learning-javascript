let arr = ["aniket", "sharma"]

let movies = {
    drama: "The godfather",
    musical: "Lala land",

    getMovie: function(){
        console.log(`Drama movie is ${this.drama}`)
    }
}


// Adding our own function in Object which will be accessible by every Array, objects, string
Object.prototype.aniket = function(){
    console.log(`This is aniket (default function)`)
}
// movies.aniket()
// arr.aniket()


// But suppose if we give function to array, it will not be accessible to object because childs property is not accessible to parents but parents property is accessible to child

Array.prototype.hello = function(){
    console.log(`This is hello property given to array`)
}
// arr.hello()
// movies.hello()       This will give error


// Prototypal inheritance
let user = {
    name: "aniket",
    email: "example@google.com"
}

let student = {
    id: 5,
    pass: "password",
    __proto__ : user
}
// Now student can access user object properties along with its own properties as well
// console.log(student.name)
// console.log(student.email)

// There is modern syntax to do this
Object.setPrototypeOf(student, user)
// console.log(student.name)
// console.log(student.email)



// Adding another method to strings to find true length
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
let str = "Aniket    "
str.trueLength()
"ryan".trueLength()