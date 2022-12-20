function setup() {
  getAudioContext().suspend();
  createCanvas(500, 400);
  somTrilhaSonora.loop();
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

function keyPressed(){
  userStartAudio();
}