// console.log(Math.PI)
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"))

const user = {
    name: "aniket",
    age: "21",
    password: "12345", 

    print: function(){
        console.log(`User name is ${this.name}`)
    }
}
// console.log(Object.getOwnPropertyDescriptor(user, 'password'))



for (let [key, value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}

Object.defineProperty(user, 'password', {
    enumerable: false,
    configurable: false
})
// console.log(Object.getOwnPropertyDescriptor(user, 'password'))

// Setting password property enumerable false means it cant be iterated and will not be printed
for (let [key, value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}