function fakeLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  if (email === "" || password === "") {
    messageDiv.innerHTML =
      "<p style='color: red;'>Por favor, preencha todos os campos.</p>";
  } else {
    messageDiv.innerHTML = "<p style='color: green;'>Login bem-sucedido!</p>";
    // Redireciona para a outra página após 2 segundos
    setTimeout(() => {
      window.location.href = "../Seleção de Usuarios/index.html";
    }, 2000);
  }
}
