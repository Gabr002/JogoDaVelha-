let x = document.querySelector(".x"); // Em relação ao placar
let o = document.querySelector(".o"); // Em relação ao placar
let boxes = document.querySelectorAll(".box"); // As caixas
let buttons = document.querySelectorAll("#buttons-container button"); // Os butões do jogo
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Contador de Jogadas
let player1 = 0;
let player2 = 0;

// adicionando um o evento de click aos boxes
for(let i = 0; i < boxes.length; i++){

    // quando alguém clica na caixa
    boxes[i].addEventListener("click", function(){
       
        let el;

        if(player1 == player2){
            // x
            el = x;
        }else{
            // o
            el = o;
        }
        this.
    });
}