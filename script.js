//function

const buttonLogin = document.querySelector(".login-button")
let inputEmail = document.querySelector(".email")
let inputSenha = document.querySelector(".password")



buttonLogin.addEventListener('click', function(event){
    event.preventDefault();
    //console.log(inputEmail.value);
    //console.log(inputSenha.value);
    if (inputEmail.value == "tryber@teste.com" && inputSenha.value == "123456"){
        alert("Olá, Tryber!")
    }
    else{
        alert("Email ou senha inválidos.")
    }
})



