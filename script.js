const botaoLogin = document.querySelector('.botao-login');
const email = document.querySelector('#login-email');
const senha = document.querySelector('#login-senha');
const botaoEnviar = document.getElementById('submit-btn');
const check = document.getElementById('agreement');

const login=() =>
email.value === 'tryber@teste.com' && senha.value === '123456' ? alert('Olá, Tryber!') : alert ('Email ou senha inválidos.');
botaoLogin.addEventListener('click', login);

const agreeButton=() =>
check.ariaChecked ? botaoEnviar.disabled = true : botaoEnviar.disabled = false;
check.addEventListener('click', agreeButton);
