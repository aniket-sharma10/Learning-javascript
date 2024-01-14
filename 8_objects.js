
// Objects can be created using object constructor or by defining them like literals

const sym = Symbol("symbolValue")

const obj1 = {
    name: "aniket",
    age: 21,
    subjects: ["js", "react", "nextjs"],
    loggedin: true,
    [sym]: "symNewValue"    //Syntax to define symbol inside objects
}

// Two ways to access object elements
// console.log(obj1['loggedin'])
// console.log(obj1.loggedin)

// To access array inside objects
// console.log(obj1['subjects'])
// console.log(obj1.subjects[1])

// To access symbol inside objects
// console.log(obj1[sym])

// to modify values inside objects
obj1.age = 25
// console.log(obj1)

// to prevent values from  modifying
// Object.freeze(obj1)
// obj1.age = 85
// console.log(obj1)

// To define functino inside a object
obj1.greeting1 = function(){
    console.log("hello user");
}
console.log(obj1.greeting1())

// Here this is used to access elements of objects because function is defined using obj1.greeting2
obj1.greeting2 = function(){
    console.log(`Hello ${this.name}, your age is ${this.age}`);
}

console.log(obj1.greeting2())