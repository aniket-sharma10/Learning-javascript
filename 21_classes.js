
// class User{
//     constructor(name, email, password){
//         this.name = name
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     upperName(){
//         return `${this.name.toUpperCase()}`
//     }
// }
// let user1 = new User("aniket", "abc@mail.com", "13245")
// console.log(user1.encryptPassword())
// console.log(user1.upperName())


// behind the scene (without using classes)
function User(name, email, password){
    this.name = name
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.upperName = function(){
    return `${this.name.toUpperCase()}`
}

let user2 = new User("sharma", "example@gmail.com", "9876")
console.log(user2.encryptPassword())
console.log(user2.upperName())
