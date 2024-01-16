
const array = [3, 5, 8, 10]

// for (const val of array) {
//     console.log(val)
// }

// Map

const map = new Map()

// to insert values inside map
map.set('name', 'aniket')
map.set('surname', 'sharma')
map.set('age', '21')
map.set('profession', 'SD')

// Forof loop on maps
// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`)
// }


const obj={
    drama: "BCS",
    Fiction: 'GOT',
    Scifi: 'dark'
}
// It does not work because objects are not iterable
// for (const [key, value] of obj) {
//     console.log(`${key} : ${value}`)    
// }

// Foreach loop is used for objects
// for (const key in obj) {
//     console.log(`${key} : ${obj[key]}`)    
// }

// Foreach loop with arrays
let arr = ['cricket', 'football', 'rugby', 'tennis']
for (const key in arr) {
    console.log(arr[key])
}