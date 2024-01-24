class User {
    constructor(username){
        this.username = username
    }

    printMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, id, password){
        super(username)
        this.id = id
        this.password = password
    }

    addCourse(){
        console.log(`New course added by ${this.username}`)
    }
}

let teacher1 = new Teacher("aniket", "example@mail.com", 3215)
teacher1.addCourse()
teacher1.printMe()

// console.log(teacher1 instanceof Teacher)
// console.log(teacher1 instanceof User)