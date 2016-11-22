//var script = document.createElement('script');
//script.src = 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js';
//script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){

    var versiculoAtual = 1;
    var ultimoVersiculo = document.getElementsByTagName('sup').length;

    $(document).keydown(function () {
        if (event.which == 118 || event.which == 86) {
            var verse = prompt("Escolha o versículo (1 a " + ultimoVersiculo + ")", versiculoAtual);
            if (verse != undefined && verse % 1 === 0) {
                versiculoAtual = verse;
                selecionaVersiculo();
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
            scrollTop: $('p.verse[verse=' + versiculoAtual + ']').offset().top - 100
        }, 'slow');
    }

    //ao começar o documento, seleciono versículo 1
    selecionaVersiculo();
});

