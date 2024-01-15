
// This keyword
const user = {
    name: "user1", 

    // This points to current instance
    welcome: function(){
        console.log(`hello ${this.name} to our website`);
        // console.log(this)
    }
}
// user.welcome()
// user.name = "aniket"
// user.welcome()

// Trying this keyword with different function syntax
// function message(){
//     let username = "aniket"
//     console.log(this.username)
// }
// message()

// const message = function (){
//     let username = "aniket"
//     console.log(this.username)
// }
// message()

// const message = () => {
//     let username = "aniket"
//     console.log(this.username)
// }
// message()


// Arrow fuctions

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(8, 12))

// When {} are absent , expression is assumed to be returned and return keyword is not used
// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2)

// console.log(addTwo(8, 12))


// When we want to return Object, it is also enclosed in ()
const addTwo = (num1, num2) => ({name: "aniket"})

console.log(addTwo())