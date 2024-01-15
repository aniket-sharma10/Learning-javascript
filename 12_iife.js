
// Immediately invoked function expression

(function db(){
    console.log("db connection successful");
})();
// ; is used to stop IIFE as they dont know when to stop


( () => {
    console.log("arrow function like IIFE")
})();

// Parameters in iife
( (name) => {
    console.log(`hello ${name}`)
})('aniket');

( (a, b) => {
    console.log(`sum is ${a+b}`)
})(5, 10);
