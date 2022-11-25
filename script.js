// function

const buttonLogin = document.querySelector('.login-button');
const inputEmail = document.querySelector('.email');
const inputSenha = document.querySelector('.password');

buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
