const botaoLogin = document.querySelector(".botao-login");
const email = document.querySelector("#login-email");
const senha = document.querySelector("#login-senha");
function login() {
  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}
botaoLogin.addEventListener("click", login);

