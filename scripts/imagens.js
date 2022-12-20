//Imagens e sons do jogo

let imagemEstrada; //Background
let imagemAtor; //Jogador
let imagemCarro, imagemCarro2,imagemCarro3,imagemCarros=[]; //Obstáculos
let somTrilhaSonora, somPontuacao, somColisao; //Efeitos sonoros

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3];
  somTrilhaSonora = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPontuacao = loadSound("sons/pontos.wav");
}