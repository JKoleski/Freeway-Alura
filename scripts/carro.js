//Carro1
let eixoXCarro=600,eixoYCarro=40,velocidadeCarro=2;

//Carro2
let eixoXCarro2=600,eixoYCarro2=96,velocidadeCarro2=3;

//Carro3
let eixoXCarro3=600,eixoYCarro3=150,velocidadeCarro3=2.5;

function geraCarro(){
    image(imagemCarro, eixoXCarro, eixoYCarro, 50, 40);
    image(imagemCarro2, eixoXCarro2, eixoYCarro2, 50, 40);
    image(imagemCarro3, eixoXCarro3, eixoYCarro3, 50, 40);
}
  
function movimentaCarro(){
    eixoXCarro -= velocidadeCarro;
    eixoXCarro2 -= velocidadeCarro2;
    eixoXCarro3 -= velocidadeCarro3;
}
  