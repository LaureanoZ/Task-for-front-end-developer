// menu hamburger
let toggle = document.querySelector(".toggle");
let navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visibility");
})
// popup
let input1 = document.querySelector("#phone");
let input2 = document.querySelector("#day");
let textPopup = document.querySelector("#textPopup");

window.addEventListener("keydown", (e) => {
    if(e.key == "Escape" && document.querySelector(".popup")){
        
        document.querySelector(".popup").style.display="none";
    }
})
document.querySelector(".popup").addEventListener("click", e =>{
    document.querySelector(".popup").style.display="none";
})
document.querySelector(".submit").addEventListener("click", e =>{
    document.querySelector(".popup").style.display="flex";
    if(isNaN(input1.value) || !(input2.value.toLowerCase() == "monday" || input2.value.toLowerCase() == "tuesday" || input2.value.toLowerCase() == "wednesday" || input2.value.toLowerCase() == "thursday" || input2.value.toLowerCase() == "friday")){
        document.querySelector(".popup").style.backgroundColor="rgb(223, 74, 74)";
        textPopup.innerHTML= `Please, put you Number Phone, and Select a day <br>Monday <br>Tuesday <br>Wednesday <br>Thursday <br>Friday`;
    }
    else{
        document.querySelector(".popup").style.backgroundColor="#3f72af";
        textPopup.innerHTML= `Your Phone Number is ${input1.value} and your Date Rate is ${input2.value}`;
    }
})
// block 4
let numberEmployees = document.querySelector("#employees");
let payroll = document.querySelector("#payroll");
let message = document.querySelector("#message");

numberEmployees.addEventListener("keyup", (event) => {
    let inputNumberEmployees = event.path[0].value;
    payroll.innerHTML = inputNumberEmployees;
})

message.addEventListener("click", (e) => {
    if(numberEmployees.value){
        e.preventDefault();
    }else{
        numberEmployees.setCustomValidity("Please, complete the Number of employees");
    }
})


