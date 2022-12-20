let eixoXAtor=85 ,eixoYAtor=366, colisao=false, pontuacao=0;
function geraAtor(){
    image(imagemAtor, eixoXAtor, eixoYAtor, 30, 30);
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW))
        eixoYAtor -= 3;
    if(keyIsDown(DOWN_ARROW)&&eixoYAtor+30<400)
        eixoYAtor += 3;
}

function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for(let i=0;imagemCarros.length > i; i++){
        colisao = collideRectCircle(eixoXCarros[i],eixoYCarros[i],comprimentoCarro,alturaCarro,eixoXAtor,eixoYAtor,15);
        if(colisao){
            colidiu();
            somColisao.play();
            if(pontuacao>0)
                pontuacao--;
        }
    }
}

function colidiu(){
    eixoYAtor=366;
}

function exibePontos(){
    textAlign(CENTER);
    textSize(25);
    fill(255,240,60);
    text(pontuacao,width/5+30,27);
}

function marcaPontos(){
    if(eixoYAtor < 15){
        pontuacao++;
        eixoYAtor=366;
        somPontuacao.play();
    }
}