function multiplyBy2(num){
    return num*2
}
multiplyBy2.random = 3
// console.log(multiplyBy2(5))
// console.log(multiplyBy2.random)
// console.log(multiplyBy2.prototype)


function createUser(username, score){
    this.username = username
    this.score = score
}

// creating our own function using prototype
createUser.prototype.multiplyBy5 = function(){
    (this.score)*5
}
createUser.prototype.printScore = function(){
    console.log(`${this.username}'s score is ${this.score}`)
}

let user1 = new createUser("aniket", 50)
let user2 = new createUser("ryan", 90)

user1.printScore()
user2.printScore()
// console.log(user1.score)