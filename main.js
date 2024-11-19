const container=document.querySelector(".container");
const registerBtn=document.querySelector(".register-btn");
const loginBtn=document.querySelector(".login-btn");

const form=document.getElementById("form");
const username=document.getElementById("username");
const password=document.getElementById("password");

function checkRequired(inputs){
    inputs.forEach(input => {
       if(input.value.trim() === ""){
        //Error
        errorInput(input, "please fill")
       }else {
        //success
        successInput(input);
       }
    });
}
function errorInput(input){
    const inputBox = input.parentElement;
    inputBox.className = "input-box error";
}

function successInput (input) {
    const inputBox = input.parentElement;
    inputBox.className = "input-box success";
    const p=inputBox.querySelector("p");
    p.innerHTML ="";
}

form.addEventListener("submit",(e)=> {
    e.preventDefault();

    checkRequired([username,password]);
});


registerBtn.addEventListener('click',()=>{
    container.classList.add('active');

    loginBtn.addEventListener('click',()=>{
        container.classList.remove('active');
    });
});
