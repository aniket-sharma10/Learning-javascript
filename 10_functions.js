
// Using rest spread operator when we dont know the exact number of parameters
function total(...num1){
    return num1
}
// console.log(total(5,9, 20))


// Passing object as an argument in a function

let user={
    name: "aniket",
    total: 999
}

function message(object){
    console.log(`${object.name}'s total is ${object.total}`)
}

message(user)

// passing actual object inside function
message({name: "virat", total: 5999})

// We can same way pass array as an argument in a function