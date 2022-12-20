let eixoYCarros=[40,96,150], eixoXCarros=[600,600,600], velocidadeCarros=[2,2.5,3.2];

function geraCarro(){
    for(let i=0;imagemCarros.length>i;i++)
        image(imagemCarros[i], eixoXCarros[i], eixoYCarros[i], 50, 40);
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