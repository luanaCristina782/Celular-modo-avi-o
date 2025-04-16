function validarEmail() {
  const email = document.getElementById("email").value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mensagem = document.getElementById("mensagem");

  if (regex.test(email)) {
    mensagem.textContent = "E-mail válido ✅";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "E-mail inválido ❌";
    mensagem.style.color = "red";
  }
}
