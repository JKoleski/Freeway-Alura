let eixoYAtor=366;

function geraAtor(){
    image(imagemAtor, 100, eixoYAtor, 30, 30);
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW))
        eixoYAtor -= 3;
    if(keyIsDown(DOWN_ARROW)&&eixoYAtor+30<400)
        eixoYAtor += 3;
}