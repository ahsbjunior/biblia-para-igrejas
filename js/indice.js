
var livros = carregarJSON();


function promptCapitulo2(livroInt) {
  var livro = livros[livroInt-1]
  var capitulo = prompt("Escolha o capítulo de "+ livro.nome.toUpperCase() + "\n(1 a " + livro.capitulos +  ")", 1);
  if (capitulo != undefined && capitulo % 1 === 0 && capitulo <= livro.capitulos) {
      window.open(livroInt + "-" + capitulo + ".html", "_blank");
  }
}


function carregarJSON() {
  return  [
            {sigla : "Gn", nome:"Gênesis", capitulos:50,indice:1},
            {sigla : "Êx", nome:"Êxodo", capitulos:40,indice:2},
            {sigla : "Lv", nome:"Levítico", capitulos:27,indice:3},
            {sigla : "Nm", nome:"Números", capitulos:36,indice:4},
            {sigla : "Dt", nome:"Deuteronômio", capitulos:34,indice:5},
            {sigla : "Js", nome:"Josué", capitulos:24,indice:6},
            {sigla : "Jz", nome:"Juízes", capitulos:21,indice:7},
            {sigla : "Rt", nome:"Rute", capitulos:4,indice:8},
            {sigla : "1Sm", nome:"1º Samuel", capitulos:31,indice:9},
            {sigla : "2Sm", nome:"2º Samuel", capitulos:24,indice:10},
            {sigla : "1Rs", nome:"1º Reis", capitulos:22,indice:11},
            {sigla : "2Rs", nome:"2º Reis", capitulos:25,indice:12},
            {sigla : "1Cr", nome:"1º Crônicas", capitulos:29,indice:13},
            {sigla : "2Cr", nome:"2º Crônicas", capitulos:36,indice:14},
            {sigla : "Ed", nome:"Esdras", capitulos:10,indice:15},
            {sigla : "Ne", nome:"Neemias", capitulos:13,indice:16},
            {sigla : "Et", nome:"Ester", capitulos:10,indice:17},
            {sigla : "Jó", nome:"Jó", capitulos:42,indice:18},
            {sigla : "Sl", nome:"Salmos", capitulos:150,indice:19},
            {sigla : "Pv", nome:"Provérbios", capitulos:31,indice:20},
            {sigla : "Ec", nome:"Eclesiastes", capitulos:12,indice:21},
            {sigla : "Ct", nome:"Cantares ou Cânticos dos Cânticos", capitulos:8,indice:22},
            {sigla : "Is", nome:"Isaías", capitulos:66,indice:23},
            {sigla : "Jr", nome:"Jeremias", capitulos:52,indice:24},
            {sigla : "Lm", nome:"Lamentações de Jeremias", capitulos:5,indice:25},
            {sigla : "Ez", nome:"Ezequiel", capitulos:48,indice:26},
            {sigla : "Dn", nome:"Daniel", capitulos:12,indice:27},
            {sigla : "Os", nome:"Oséias", capitulos:14,indice:28},
            {sigla : "Jl", nome:"Joel", capitulos:3,indice:29},
            {sigla : "Am", nome:"Amós", capitulos:9,indice:30},
            {sigla : "Ob", nome:"Obadias", capitulos:1,indice:31},
            {sigla : "Jn", nome:"Jonas", capitulos:4,indice:32},
            {sigla : "Mq", nome:"Miquéias", capitulos:7,indice:33},
            {sigla : "Na", nome:"Naum", capitulos:3,indice:34},
            {sigla : "Hc", nome:"Habacuque", capitulos:3,indice:35},
            {sigla : "Sf", nome:"Sofonias", capitulos:3,indice:36},
            {sigla : "Ag", nome:"Ageu", capitulos:2,indice:37},
            {sigla : "Zc", nome:"Zacarias", capitulos:14,indice:38},
            {sigla : "Ml", nome:"Malaquias", capitulos:4,indice:39},
            {sigla : "Mt", nome:"Mateus", capitulos:28,indice:40},
            {sigla : "Mc", nome:"Marcos", capitulos:16,indice:41},
            {sigla : "Lc", nome:"Lucas", capitulos:24,indice:42},
            {sigla : "Jo", nome:"João", capitulos:21,indice:43},
            {sigla : "At", nome:"Atos dos Apóstolos", capitulos:28,indice:44},
            {sigla : "Rm", nome:"Romanos", capitulos:16,indice:45},
            {sigla : "1Co", nome:"1ª Coríntios", capitulos:16,indice:46},
            {sigla : "2Co", nome:"2ª Coríntios", capitulos:13,indice:47},
            {sigla : "Gl", nome:"Gálatas", capitulos:6,indice:48},
            {sigla : "Ef", nome:"Efésios", capitulos:6,indice:49},
            {sigla : "Fp", nome:"Filipenses", capitulos:4,indice:50},
            {sigla : "Cl", nome:"Colossenses", capitulos:4,indice:51},
            {sigla : "1Ts", nome:"1ª Tessalonicenses", capitulos:5,indice:52},
            {sigla : "2Ts", nome:"2ª Tessalonicenses", capitulos:3,indice:53},
            {sigla : "1Tn", nome:"1ª Timóteo", capitulos:6,indice:54},
            {sigla : "2Tm", nome:"2ª Timóteo", capitulos:4,indice:55},
            {sigla : "Tt", nome:"Tito", capitulos:3,indice:56},
            {sigla : "Fm", nome:"Filemom", capitulos:1,indice:57},
            {sigla : "Hb", nome:"Hebreus", capitulos:13,indice:58},
            {sigla : "Tg", nome:"Tiago", capitulos:5,indice:59},
            {sigla : "1Pe", nome:"1ª Pedro", capitulos:5,indice:60},
            {sigla : "2Pe", nome:"2ª Pedro", capitulos:3,indice:61},
            {sigla : "1Jo", nome:"1ª João", capitulos:5,indice:62},
            {sigla : "2Jo", nome:"2ª João", capitulos:1,indice:63},
            {sigla : "3Jo", nome:"3ª João", capitulos:1,indice:64},
            {sigla : "Jd", nome:"Judas", capitulos:1,indice:65},
            {sigla : "Ap", nome:"Apocalipse", capitulos:22,indice:66}
  ];
}
