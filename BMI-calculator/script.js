let form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#results');
  
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter valid weight";
    }
    else{
        let bmi = Math.round((weight/Math.pow((height/100), 2)) * 10) / 10;
        result.innerHTML = bmi;
    }
})