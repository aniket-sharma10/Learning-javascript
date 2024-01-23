// here createUser calls setUsername but the username setUsername sets goes out of call stack as soon as function is implemented because it is setting username to its own this context

// function setUsername(username){
//     //DB calls
//     this.username = username
//     console.log("called")
// }

// function createUser(username, email, password){
//     setUsername(username)

//     this.email = email
//     this.password = password
// }
// const user1 = new createUser("aniket", "abc@email.com", 123456)
// console.log(user1)


// Here setUsername sets username to the this context of createUser because createUser sends its own this context as a parameter while calling setUsername and .call is used so that reference of username stays

function setUsername(username){
    //DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}
const user1 = new createUser("aniket", "abc@email.com", 123456)
console.log(user1)