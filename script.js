var carta1 = {
  nome: "Cloud Strife",
  imagem: "https://c.tenor.com/OWu-jbufd0UAAAAd/im-ready-final-fantasy-vii.gif",
  atributos: {ataque: 40, defesa: 30, magia: 10,}
};

var carta2 = {
  nome: "Tifa Lockhart",
  imagem: "https://c.tenor.com/HVmRQ89chP4AAAAC/%E3%83%86%E3%82%A3%E3%83%95%E3%82%A1-tifa.gif",
  atributos: {ataque: 50, defesa: 15, magia: 0,}
};   
    
var carta3 = {
  nome: "Aerith Gainsborough",
  imagem: "https://c.tenor.com/auuoVsMHiOUAAAAC/aerith.gif",
  atributos: {ataque: 15, defesa: 50, magia: 50,}
};

var carta4 = {
  nome: "Barret Wallace",
  imagem: "https://c.tenor.com/trBV66ueDaQAAAAC/%E3%83%90%E3%83%AC%E3%83%83%E3%83%88-barret-wallace.gif",
  atributos: {ataque: 30, defesa: 30, magia: 0,}
};

var carta5 = {
  nome:"Red XIII",
  imagem: "https://c.tenor.com/HbG5HZAoE6sAAAAC/red-xiii-final-fantasy-vii-remake.gif",
  atributos: {ataque: 10, defesa: 10, magia: 20,}
};

var carta6 = {
  nome: "Jessie Rasberry",
  imagem: "https://c.tenor.com/GGgc0xw9nKsAAAAC/jessie-jessie-ffvii.gif",
  atributos: {ataque: 10, defesa: 5, magia: 0,}
};

var carta7 = {
  nome: "Biggs",
  imagem: "https://pbs.twimg.com/media/EyBhZC1UcAAAZRj.jpg",
  atributos: {ataque: 11, defesa: 6, magia: 0,}
};

var carta8 = {
  nome: "Wedge",
  imagem: "https://static.wikia.nocookie.net/finalfantasy/images/b/b2/Wedge_Gun_FFVIIR.jpg",
  atributos: {ataque: 5, defesa: 3, magia: 0,}
};

var carta9 = {
  nome: "Don Corneo",
  imagem: "https://www.digitaltq.com/images/uploads/galleries/final-fantasy-vii-remake/don_corneo.jpg",
  atributos: {ataque: 0, defesa: 0, magia: 0,}
};

var carta10 = {
  nome: "Roche",
  imagem: "https://sm.ign.com/ign_br/screenshot/default/roche_6tu3.jpg",
  atributos: {ataque: 20, defesa: 20, magia: 5,}
};

var carta11 = {
  nome: "Reno",
  imagem: "https://c.tenor.com/KpkhIlx8qXsAAAAM/ffvii-remake-ff7remake.gif",
  atributos: {ataque: 19, defesa: 17, magia: 6,}
};

var carta12 = {
  nome: "Rude",
  imagem: "https://c.tenor.com/UdjXyii1AQcAAAAC/ff7r-ffvii-remake.gif",
  atributos: {ataque: 21, defesa: 20, magia: 6,}
};

var carta13 = {
  nome: "Sephiroth",
  imagem: "https://c.tenor.com/FZHEiqVbPVMAAAAd/sephiroth.gif",
  atributos: {ataque: 50, defesa: 50, magia: 50,}
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13];
var cartaMaquina;
var cartaJogador;
var pontosMaquina = 0;
var pontosJogador = 0;
document.getElementById("btnRodada").disabled = true;

function sortearCarta() {
  var numCartaMaquina = parseInt(Math.random() * 13);
  cartaMaquina = cartas[numCartaMaquina]; 
  var numCartaJogador = parseInt(Math.random() * 13);
  
  while (numCartaMaquina == numCartaJogador) {
    numCartaJogador = parseInt(Math.random() * 13);
  }
  cartaJogador = cartas[numCartaJogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  mostrarCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var resultadoFinalHTML = document.getElementById("resultado");
  var pontuacaoFinalJogador = document.getElementById("pJogador");
  var pontuacaoFinalMaquina = document.getElementById("pMaquina");
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    pontosJogador++;
    htmlResultado = "<p class='resultado-final'>VOCÊ VENCEU ESSA RODADA!!! CONTINUE ASSIM!!!</p>";
    pontuacaoJogadorHTML = `<p class='ponto-final-jogador'>Pontos Jogador: ${pontosJogador}</p>`;
    pontuacaoMaquinaHTML = `<p class='ponto-final-maquina'>Pontos Maquina: ${pontosMaquina}</p>`;
    document.getElementById("btnRodada").disabled = false; 
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    pontosMaquina++
    htmlResultado = "<p class='resultado-final'>VOCÊ PERDEU ESSA RODADA!!! NÃO DESISTA!!!</p>";
    pontuacaoJogadorHTML = `<p class='ponto-final-jogador'>Pontos Jogador: ${pontosJogador}</p>`;
    pontuacaoMaquinaHTML = `<p class='ponto-final-maquina'>Pontos Maquina: ${pontosMaquina}</p>`;
    document.getElementById("btnRodada").disabled = false; 
  } else {
    pontuacaoJogadorHTML = `<p class='ponto-final-jogador'>Pontos Jogador: ${pontosJogador}</p>`;
    pontuacaoMaquinaHTML = `<p class='ponto-final-maquina'>Pontos Maquina: ${pontosMaquina}</p>`;
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
    document.getElementById("btnRodada").disabled = false; 
  }
  resultadoFinalHTML.innerHTML = htmlResultado;
  pontuacaoFinalJogador.innerHTML = pontuacaoJogadorHTML;
  pontuacaoFinalMaquina.innerHTML = pontuacaoMaquinaHTML;
  document.getElementById("btnJogar").disabled = true;
  mostrarCartaMaquina();  
}

function mostrarCartaJogador() {
  var htmlCartaJogador = document.getElementById("carta-jogador");
  htmlCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  htmlCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function mostrarCartaMaquina() {
  var htmlCartaMaquina = document.getElementById("carta-maquina");
  htmlCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  htmlCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  
}

function proximaRodada() {
  var novoJogoHTML = document.getElementById("novo-jogo");
  var resultadoFinalHTML2 = document.getElementById("resultado");
  var musica = document.getElementById("musica");
  
  if (pontosJogador == 5) {
    htmlResultado = `<p class='resultado-final'>Você Venceu, o Placar foi Jogador: ${pontosJogador} Máquina: ${pontosMaquina}</p>`
    botaoJogo = `<button type="button" onclick="novoJogo()" id="btnNovoJogo">Novo Jogo</button>`
    musicaHTML = `<audio autoplay="autoplay"><source src="https://prodigits.co.uk/content2/mp3-ringtones/tone/2015/games/preview/kmI89zGa.mp3" type="audio/mp3" /></audio> `
    document.getElementById("btnRodada").disabled = true;
    musica.innerHTML = musicaHTML;
    resultadoFinalHTML2.innerHTML = htmlResultado;
    novoJogoHTML.innerHTML = botaoJogo;
  } else if (pontosMaquina == 5) {
    htmlResultado = `<p class='resultado-final'>Você Perdeu, o Placar foi Máquina: ${pontosMaquina} Jogador: ${pontosJogador}</p>`
    botaoJogo = `<button type="button" onclick="novoJogo()" id="btnNovoJogo">Novo Jogo</button>`
    document.getElementById("btnRodada").disabled = true;
    resultadoFinalHTML2.innerHTML = htmlResultado;
    novoJogoHTML.innerHTML = botaoJogo;
  } else {
    document.getElementById("btnRodada").disabled = true;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("carta-jogador").innerHTML = "";
    document.getElementById("carta-jogador").style.backgroundImage = "";
    document.getElementById("carta-maquina").innerHTML = "";
    document.getElementById("carta-maquina").style.backgroundImage = "";
    sortearCarta();
  }
}
function novoJogo() {
  document.getElementById("musica").innerHTML = "";
  document.getElementById("carta-jogador").innerHTML = "";
  document.getElementById("carta-jogador").style.backgroundImage = "";
  document.getElementById("carta-maquina").innerHTML = "";
  document.getElementById("carta-maquina").style.backgroundImage = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("pJogador").innerHTML = "";
  document.getElementById("pMaquina").innerHTML = "";
  pontosMaquina = 0;
  pontosJogador = 0;
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("novo-jogo").innerHTML = "";
}