const botaoLogin = document.querySelector('.botao-login');
const email = document.querySelector('#login-email');
const senha = document.querySelector('#login-senha');
const botaoEnviar = document.getElementById('submit-btn');
const check = document.getElementById('agreement');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoLogin.addEventListener('click', login);


function agreeButton() {

  if (check.ariaChecked) {
    botaoEnviar.disabled = true;
  } else {
    botaoEnviar.disabled = false;
  }
}

check.addEventListener('click', agreeButton);