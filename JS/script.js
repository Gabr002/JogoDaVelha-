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
       
        let el = checkEl(player1, player2);
        
        // verifica se já tem x ou não
        if(this.childNodes.length == 0){
            let cloneEL = el.cloneNode(true);

            this.appendChild(cloneEl); // Adicionando o elemento na caixa

            // Computar a jogada
            if(player1 == player2){
                player1++;
            } else{
                player2++;
            }
        }
    });
}

// Quem vai jogar
function checkEl(player1, player2){
    if(player1 == player2){
        // x
        el = x;
    }else{
        // o
        el = o;
    }

    return el;
}