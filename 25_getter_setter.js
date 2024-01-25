class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    // We have to keep the name of getter and setter function same as property
    // Inside function we have to change name of attributes such as (email and _email) because if they are same constructor and getter/setters will try to assign same values which will result in call stack size exceeded error

    get email(){
        return this._email.toUpperCase()
    } 
    set email(value){
        this._email = value
    } 

    get password(){
        return `${this.pass.toUpperCase()}123`
    }

    set password(value){
        return this.pass = value
    }
}

let aniket = new User("aniket@email.com", "abc")
console.log(aniket.password)
console.log(aniket.email)