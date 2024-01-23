// let promiseOne =  new Promise( function(resolve, reject){
//     // Do any async task
//     // like DB calls, cryptography, network

//     setTimeout(() => {
//         console.log("async task complete")
//         resolve()
//     }, 1000);
// } )

// promiseOne.then( function(){
//     console.log('Promise resolved')
// } )


// Another way without assigning promise to a variable
// new Promise( function(resolve, reject){
//     setTimeout(() => {
//         console.log("async task 2")
//         resolve()
//     }, 1000);
// }).then( ()=>{
//     console.log('async task 2 resolved')
// } )


// Getting data through resolve. Data can be in either object form, or array or function
// new Promise( function(resolve, reject){
//     setTimeout(() => {
//         console.log("\nPromise three")
//         resolve({name: "aniket sharma", email: "aniket@example.com"})
//     }, 1000);
// }).then( function(user){
//     console.log(user)
//     // console.log(user.name)
// })


// Actual way of using promises. Using chaining and error handling using catch
// let promiseFour = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({name: "Aniket", age: 21})
//         }
//         else{
//             reject('Error: Something went wrong')
//         }
//     }, 1500);
// } )

// promiseFour
// .then( (user)=>{
//     // console.log(user)
//     return user.name;
// })
// .then ( (name)=>{
//     console.log(name)
// })
// .catch( (error)=>{
//     console.log(error)
// })
// .finally( ()=> console.log('Promise is either resolved or rejected'))



// Instead of using then,catch ..we can also use async/await to consume promise
// let promiseFive = new Promise( (resolve, reject) =>{
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({name: "Aniket", age: 21})
//         }
//         else{
//             reject('Error: Something went wrong')
//         }
//     }, 1500);
// })

// async function consumePromiseFive(){
//     try {
//         let response = await promiseFive;
//         console.log(response)
//         // console.log(response.age)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()



// Fetching data with async await
async function fetchData(){
    try {
        let response = await fetch('https://api.github.com/users/aniket-sharma10');
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('Error: ', error);
    }
}
fetchData()

// The same code above using then/catch will look like this
fetch('https://api.github.com/users/aniket-sharma10')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log('error is: ', error) )