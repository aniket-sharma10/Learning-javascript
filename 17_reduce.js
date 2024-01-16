
let num = [1, 2, 3]

// Reduce() takes another parameter initial value along with callback function which goes into accumulator in the beggining

// reduce() with normal function
// let total = num.reduce( function(acc, curr){
//     console.log(`Accumulator: ${acc} and current: ${curr}`)
//     return acc+curr
// } , 0)

// console.log(total)

// reduce() with arrow function
// let total = num.reduce( (acc, curr)=> (acc+curr), 0)
// console.log(total)

// Mainly used to calculate total in carts
let cart=[
    {
        name: 'shirt',
        price: 900
    },
    {
        name: 'jacket',
        price: 2000
    },
    {
        name: 'trousers',
        price: 1500
    },
    {
        name: 'cap',
        price: 500
    },
]

let total = cart.reduce( (acc, curr)=> (acc+ curr.price) , 0)
console.log(total)