var maxPerguntas = 3;
        
function aoCarregar(){
    escondeTudo();
    document.getElementById('pergunta1').style.display = "block";
    document.getElementById('perguntaAtual').value = 1;
}
function escondeTudo(){
    for( i = 1; i <= maxPerguntas; i++){
    document.getElementById('pergunta'+i).style.display = "none";
    }
}
function perguntaAnterior(){
    atual = document.getElementById('perguntaAtual').value;
    if(atual > 1){
        escondeTudo();
        document.getElementById('perguntaAtual').value--;
        document.getElementById('pergunta'+document.getElementById('perguntaAtual').value).style.display = "block";
    }
}

function proximaPergunta(){
    
    atual = document.getElementById('perguntaAtual').value;
    if(atual >1 ){
        document.getElementById('Bsalvar').style.display = 'inline';
  
    }
    if(atual >= 1 && atual < maxPerguntas){
        escondeTudo();
        document.getElementById('perguntaAtual').value++;
        document.getElementById('pergunta'+document.getElementById('perguntaAtual').value).style.display = "block";
        
    }
    
}
