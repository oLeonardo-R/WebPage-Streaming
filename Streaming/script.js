$(document).ready(function () {
  // Função para exibir o vídeo do trailer no modal
  $('a[data-toggle="modal"]').click(function () {
    var videoSrc =
      "https://www.youtube.com/embed/_3D3SF09ca8?si=ySCqlzdDRIOPXB4n";
    $("#trailerVideo").attr("src", videoSrc);
  });

  // Função para parar o vídeo do trailer ao fechar o modal
  $("#trailerModal").on("hidden.bs.modal", function () {
    $("#trailerVideo").attr("src", "");
  });

  // Código para o menu responsivo
  $("#hamburger").click(function () {
    $(this).toggleClass("open");
    $(".nav-list").toggleClass("open");
  });
});
