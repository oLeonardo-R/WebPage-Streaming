document.addEventListener("DOMContentLoaded", () => {
  const juniorLink = document.querySelector(
    '.user a[href="http://127.0.0.1:5500/Desafio-%20Projeto%20Web/Streming/index.html"]'
  );
  const transitionVideoContainer = document.getElementById(
    "transition-video-container"
  );
  const transitionVideo = document.getElementById("transition-video");

  juniorLink.addEventListener("click", (event) => {
    event.preventDefault(); // Evita a navegação imediata
    transitionVideoContainer.style.display = "block";
    transitionVideo.play();

    // Redireciona após o término do vídeo
    transitionVideo.onended = () => {
      window.location.href = "../Streaming/index.html";
    };
  });
});
