
// We cant check condition in forEach loop , so filter is used

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Without using filter function and with forEach loop
// const above5 = []

// numbers.forEach( (num)=>{
//     if(num>5){
//         above5.push(num)
//     }
// } )
// console.log(above5)

// Another way of doing this will be using filter function

const above5 = numbers.filter( (num)=> num>5 )
// or 
// const above5 = numbers.filter( (num)=> (num>5) )
// or
// const above5 = numbers.filter( (num)=> {
//     return num>5
// } )
console.log(above5)