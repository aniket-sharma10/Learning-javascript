
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// adding 10 to each number with foreach
// numbers.forEach( (num)=> {
//     console.log(num+10)
// } )

// adding 10 to each number with map()
// const newNum = numbers.map( (num)=> num+10 )
// console.log(newNum)

// We can use multiple functions together. This is called chaining in which result of one function is passed as parameter to next function
const newNum = numbers.map( (num)=> num*10 )
                      .map( (num)=> num+5 )
                      .filter( (num)=> num>50 )
console.log(newNum)