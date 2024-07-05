// Selecionando os elementos do slider
let items = document.querySelectorAll(".slider .lista .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".miniaturas .item");

// Configurações iniciais
let countItem = items.length;
let itemAtivo = 0;

// Evento de clique no botão próximo
next.onclick = function () {
  itemAtivo++;
  if (itemAtivo >= countItem) {
    itemAtivo = 0;
  }
  mostrarSlider();
};

// Evento de clique no botão anterior
prev.onclick = function () {
  itemAtivo--;
  if (itemAtivo < 0) {
    itemAtivo = countItem - 1;
  }
  mostrarSlider();
};

// Função para mostrar o slider ativo
function mostrarSlider() {
  // Remover a classe 'ativo' do item anterior
  let itemAtivoAntigo = document.querySelector(".slider .lista .item.ativo");
  let thumbnailAtivoAntigo = document.querySelector(".miniaturas .item.ativo");
  itemAtivoAntigo.classList.remove("ativo");
  thumbnailAtivoAntigo.classList.remove("ativo");

  // Adicionar a classe 'ativo' ao novo item
  items[itemAtivo].classList.add("ativo");
  thumbnails[itemAtivo].classList.add("ativo");
}

// Evento de clique nas miniaturas
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemAtivo = index;
    mostrarSlider();

    // Limpar e reiniciar o intervalo do slider automático
    clearInterval(intervaloSlider);
    intervaloSlider = setInterval(() => {
      next.click();
    }, 5000);
  });
});
