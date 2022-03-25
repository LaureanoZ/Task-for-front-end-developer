let fieldNumber = document.querySelector("#field-number");
let fieldName   = document.querySelector("#field-name");
let fieldDate   = document.querySelector("#field-date");
let generate    = document.querySelector("#generate");
let pNumber     = document.querySelector("#p-number");
let pName       = document.querySelector("#p-name");
let pDate       = document.querySelector("#p-date");

fieldNumber.addEventListener('keyup', (e) =>{
    let fieldValue = e.target.value;
    fieldNumber.value = fieldValue.replace(/\s/g, '').replace(/\D/g, '').replace(/([0-9]{4})/g,'$1 ').trim();
    
    pNumber.innerHTML = fieldValue;
});

fieldName.addEventListener('keyup', (e) =>{
    let fieldValue = e.target.value;
    fieldName.value = fieldValue.replace(/[0-9]/g, '');
    
    pName.innerHTML = fieldValue;
});

fieldDate.addEventListener('keyup', (e) =>{
    let fieldValue = e.target.value;
    fieldDate.value = fieldValue.replace(/\s/g, '').replace(/\D/g, '').replace(/([0-9]{2})/,'$1/');
    
    pDate.innerHTML = fieldValue;
});

generate.addEventListener('click', (e) =>{
    e.preventDefault();
    let randomNumber = Math.floor(Math.random()*1000000000000000000).toString().replace(/([0-9]{4})/g,'$1 ').trim();
    console.log(randomNumber)
    if (randomNumber.length >= 21 ){
        pNumber.innerHTML = randomNumber.slice(0, -2);
    }
    else{
        pNumber.innerHTML = randomNumber;
    }
});
