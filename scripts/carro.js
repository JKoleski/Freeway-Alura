let eixoYCarros=[40,96,150, 210,270,318], eixoXCarros=[600,600,600,600,600,600], velocidadeCarros=[2,2.5,3.2,5,3.3,2.3];
let comprimentoCarro=50, alturaCarro=40;
function geraCarro(){
    for(let i=0;imagemCarros.length>i;i++)
        image(imagemCarros[i], eixoXCarros[i], eixoYCarros[i], comprimentoCarro, alturaCarro);
}
  
function movimentaCarro(){
    for(let i=0;imagemCarros.length>i;i++)
        eixoXCarros[i] -= velocidadeCarros[i];
}

function retornaPosicaoInicialDoCarro(){
    for(let i=0;imagemCarros.length>i;i++)
        if(eixoXCarros[i] < -50)
            eixoXCarros[i]=600;
}
