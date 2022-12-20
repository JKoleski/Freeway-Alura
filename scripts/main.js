
//Carro
let eixoXCarro=600,eixoYCarro=40,velocidadeCarro=5;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  geraAtor();
  geraCarro();
  movimentaCarro();
  movimentaAtor();
}

function geraCarro(){
  image(imagemCarro, eixoXCarro, eixoYCarro, 50, 40);
}

function movimentaCarro(){
  eixoXCarro -= 2;
}
