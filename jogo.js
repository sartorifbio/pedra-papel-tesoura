/* 
    -entrada de dados pelo usuário. Ele escolherá pedra, papel ou tesoura.
    -computador vai escolher aleatoriamente uma das opções através de uma função chamada getComputerChoice.
    -dados vão entrar dentro da função playRound para verificação das condições de escolha do jogador e do computador.
    
*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'a tie';
    }

    /* Condições em que o computador ganha */
    else if(computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'rock') {
        return 'you lose';
    }

    else {
        return 'you won';
    }
}

function getComputerChoice(){
    let moves = optionGame = ['rock', 'paper', 'scissors'];
    /* O Math.floor retorna um número inteiro enquanto o Math.random retorna um número aleatório entre 0 e 1. Com o moves.length será retornado o número de itens do array. */
    let choice = Math.floor(Math.random() * moves.length);
    return moves[choice];
}

function game(){

    let you = 0;
    let computer = 0;


    for (let i = 0; i<5; i++){

        const playerSelection = window.prompt('Enter option:', 'rock, paper or scissors');
        const computerSelection = getComputerChoice();

        console.log(playerSelection);
        console.log(computerSelection)

        if (playRound(playerSelection, computerSelection) == 'you won'){
            you = ++you;
        }

        else if (playRound(playerSelection, computerSelection) == 'you lose'){
            computer = ++computer;
        }

        else{
            youscore = you;
            computerscore = computer;
        }

        console.log(`SCORE:
        You: ${you}
        Computer: ${computer}`);
    }

    if (you > computer){
        console.log('Congratulation, you won');
    }
    else if (you < computer){
        console.log('unfortunately you lost');
    }
    else{
        console.log('There was a draw');
    }
}

console.log(game());
   
  