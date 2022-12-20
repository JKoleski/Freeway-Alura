let eixoXCarro=600,eixoYCarro=40,velocidadeCarro=5;

function geraCarro(){
    image(imagemCarro, eixoXCarro, eixoYCarro, 50, 40);
}
  
function movimentaCarro(){
    eixoXCarro -= 2;
}
  