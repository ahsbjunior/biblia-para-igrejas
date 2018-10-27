//var script = document.createElement('script');
//script.src = 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js';
//script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){

    const OFFSET_CABECALHO = 92;
    var versiculoAtual = 1;
    var ultimoVersiculo = document.getElementsByTagName('sup').length;

    $(document).keydown(function () {
        if (event.which == 118 || event.which == 86) {
            var verse = prompt("Escolha o versículo (1 a " + ultimoVersiculo + ")", versiculoAtual);
            if (verse != undefined && verse % 1 === 0) {
                versiculoAtual = verse;
                selecionaVersiculo();
            }
        } else if (event.which == 67) {
          var numeroDeCapitulos = document.getElementsByTagName("TD").length;
          var nomeDocumentoArray = location.pathname.split("/");
          var nomeArquivo = nomeDocumentoArray[nomeDocumentoArray.length - 1];
          var livroAtual = nomeArquivo.split("-")[0];
          var capituloAtual = nomeArquivo.split("-")[1].split(".")[0];
          var capitulo = prompt("Escolha o capítulo\n(1 a " + numeroDeCapitulos +  ")", capituloAtual);
          if (capitulo != undefined && capitulo % 1 === 0 && capitulo <= numeroDeCapitulos && capitulo != capituloAtual) {
              window.open(livroAtual + "-" + capitulo + ".html", "_self");
          }
        } else if (event.which == 37) { //esquerda
            versiculoAtual--;
            if (versiculoAtual < 1)
                versiculoAtual = 1;
            selecionaVersiculo();
        } else if (event.which == 39) { //direita
            versiculoAtual++;
            if (versiculoAtual > ultimoVersiculo)
                versiculoAtual = ultimoVersiculo;
            selecionaVersiculo();
        }
    });

    function selecionaVersiculo() {
        $('html, body').animate({
            scrollTop: $('p.verse[verse=' + versiculoAtual + ']').offset().top - OFFSET_CABECALHO
        }, 'slow');
    }

    //ao começar o documento, seleciono versículo 1
    selecionaVersiculo();
});
