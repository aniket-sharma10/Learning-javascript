
// for each loops

const movies = ["notebook", "tenet", "drive", "5to7"]

// Foreach loop with normal functions
// movies.forEach( function (item){
//     console.log(item)
// })

// Foreach loop with arrow functions
// movies.forEach( (item) =>{
//     console.log(item)
// })

//Foreach loop with passing function as para
// function print(item){
//     console.log(item)
// }
// movies.forEach( print )


// Accessing objects inside array

const shows = [
    {
        genre: "drama",
        show: "Better call saul"
    },
    {
        genre: "fiction",
        show: "Game of thrones"
    },
    {
        genre: "Crime",
        show: "Mindhunter"
    }
]

shows.forEach( (item)=> {
    console.log(`${item.genre} has ${item.show}`)
} )