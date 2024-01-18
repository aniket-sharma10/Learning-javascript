let body = document.querySelector('body');
let buttons = document.querySelectorAll('.button');
console.log(buttons)
// button.style.backgroundColor = "brown"
buttons.forEach( (element) =>{
    element.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id;
    });
});