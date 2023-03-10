/* 
    -entrada de dados pelo usuário. Ele escolherá pedra, papel ou tesoura.
    -computador vai escolher aleatoriamente uma das opções através de uma função chamada getComputerChoice.
    -dados vão entrar dentro da função playRound para verificação das condições de escolha do jogador e do computador.
    
*/

function playRound(playerSelection, computerSelection) {   
    
  if (playerSelection === computerSelection) {
      return 'A tie';
  }

  /* Condições em que o computador ganha */
  else if(computerSelection === 'Rock' && playerSelection === 'Scissors' || computerSelection === 'Scissors' && playerSelection === 'Paper' || computerSelection === 'Paper' && playerSelection === 'Rock') {
      return 'You Lose';
  }

  else {
      return 'You Win';
  }
}

function getComputerChoice(){
  let moves = optionGame = ['Rock', 'Paper', 'Scissors'];
  /* O Math.floor retorna um número inteiro enquanto o Math.random retorna um número aleatório entre 0 e 1. Com o moves.length será retornado o número de itens do array. */
  let choice = Math.floor(Math.random() * moves.length);
  return moves[choice];
}


function score(winLoss, scoreYou, scoreComputer){
  
  const you = document.querySelector('.score-you');
  Number(youScore);
  youScore += scoreYou;
  you.textContent = `You: ${youScore}`;
  const computer = document.querySelector('.score-computer');
  Number(computerScore);
  computerScore += scoreComputer;
  computer.textContent = `Computer: ${computerScore}`;

  if (computerScore === 5){
    let winner = document.querySelector('#congratulations');
    winner.textContent = "\nIt was not this time!"
    setTimeout(function(){
      winner.textContent = '';
      youScore = 0;
      you.textContent = `You: ${youScore}`;
      computerScore = 0;
      computer.textContent = `Computer: ${computerScore}`;
      }, 3000);
    
  }
  else if(youScore === 5){
    let winner = document.querySelector('#congratulations');
    winner.textContent = "\nCongratulations you won!"
    setTimeout(function(){
      winner.textContent = '';
      youScore = 0;
      you.textContent = `You: ${youScore}`;
      computerScore = 0;
      computer.textContent = `Computer: ${computerScore}`;
      }, 3000);
    
  }
   
}  


const buttons = document.querySelectorAll('button');

const messanger = document.querySelector('#messanger-win');

// criando uma váriavel string com o estilo css que será usado na mensagem 
const css = `
  #messanger-win{
    font-family: 'Audiowide', cursive;
    font-size: 20px;
    color: #F9FAF8;
    padding: 5px;
    border: 4px solid;
    border-color:#F9FAF8;
    border-radius: 10px;
    background: linear-gradient(to right, #CA31E8, #4B33F2, #15EB12);
    background-clip: padding-box;
  }
`;

let youScore = 0;
let computerScore = 0;

let playerSelection;
// Usamos o método .ForEach para iterar em cada botão
// e para cada um, adicionamos um ouvinte 'clique'

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click",

    function() {

    let computerSelection = getComputerChoice();
    
    let winLoss = playRound(playerSelection = this.id, computerSelection);

    messanger.textContent =`
    Computer: ${computerSelection}
    \n
    You: ${playerSelection = this.id}
    \n
    ${winLoss}`;

    if (winLoss === 'A tie'){
      scoreYou = 0;
      scoreComputer = 0;
    }
    else if(winLoss === 'You Lose'){
      scoreYou = 0;
      scoreComputer = 1;
    }
    else{
      scoreYou = 1;
      scoreComputer = 0;
    }

    const style = document.createElement('style');
    messanger.style.display = 'block';      

    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } 
    else {
      style.appendChild(document.createTextNode(css));
    }

    document.head.appendChild(style);

    // define um tempo para remover a mensagem
    setTimeout(function() {
    messanger.style.display = 'none';
    }, 3000);

    score(winLoss, scoreYou, scoreComputer);
  });
});