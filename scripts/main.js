function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  geraAtor();
  geraCarro();
  movimentaCarro();
  movimentaAtor();
  retornaPosicaoInicialDoCarro();
  verificaColisao();
  exibePontos();
  marcaPontos();
}