let score = JSON.parse(localStorage.getItem('score')) ||  { wins: 0,
  losses: 0,
  ties: 0.
}
 
updateScore();

let isAutoPlaying = false;

let intervalId;

const autoplayGame = document.querySelector('.js-autoplay-button');
autoplayGame.addEventListener('click', () => {
  autoPlay();
} )



function autoPlay() {
  if (isAutoPlaying === false) {
 intervalId = setInterval(() => {
    const playerMove = pickComputerMove();
    playGame(playerMove);
  },2000)
  isAutoPlaying = true;
  document.querySelector('.js-autoplay-button').innerHTML = 'Stop Playing';
}

else {clearInterval(intervalId)
isAutoPlaying = false
document.querySelector('.js-autoplay-button').innerHTML = 'Auto Play'}
};

document.querySelector('.js-rock-button')
.addEventListener('click', () => {
  playGame('rock');
} )

document.querySelector('.js-paper-button')
.addEventListener('click', () => {
  playGame('paper');
} )

document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
  playGame('scissors');
} )

const dropdown = document.querySelector('.js-notification');
document.querySelector('.js-reset-button')
.addEventListener('click', () => {
   dropdown.innerHTML = `Are you sure you want to reset the score?
    <button onclick="
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
    updateScore();
    dropdown.innerHTML = '';
    ">Yes</button>

   <button onclick="
     dropdown.innerHTML = '';
     ">No</button>`

     clearInterval(intervalId)
isAutoPlaying = false
document.querySelector('.js-autoplay-button').innerHTML = 'Auto Play'
} )


document.body.addEventListener('keydown', (event) => {
     if (event.key === 'r') {
          playGame('rock');
     }
     else if (event.key === 'p') {
      playGame('paper')
     }

     else if (event.key === 's') {
      playGame('scissors')
     }

     else if (event.key === 'a') {
       autoPlay();
     }

     else if (event.key === 'Backspace') {
      dropdown.innerHTML = `Are you sure you want to reset the score?
      <button onclick="
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score')
      updateScore();
      dropdown.innerHTML = '';
      ">Yes</button>

     <button onclick="
       dropdown.innerHTML = '';
       ">No</button>`
       
 clearInterval(intervalId)
isAutoPlaying = false
document.querySelector('.js-autoplay-button').innerHTML = 'Auto Play'
     }
})

function playGame(playerMove) {

const computerMove = pickComputerMove();

let result = '';
  
if (playerMove === 'scissors') {

if (computerMove === 'scissors')
{result = 'Tie.';}

else if (computerMove === 'rock')
{result = 'you lose';}

else if (computerMove === 'paper')
{result = 'you win';}
}

else if (playerMove === 'paper') {
 
if (computerMove === 'rock') {
result = 'you win'
}
else if (computerMove === 'paper') {
result = 'Tie.';
}

else if (computerMove === 'scissors') {
result = 'you lose'; 

}

}

else if (playerMove === 'rock') {

  if (computerMove === 'rock') {
    result = 'Tie.'
  }
  else if (computerMove === 'paper') {
    result = 'you lose';
  }

  else if (computerMove === 'scissors') {
    result = 'you win';
    
  }

}

if (result === 'you win') {
   score.wins ++ ; 
}
else if (result === 'you lose') {
  score.losses ++ ;
} 

else if (result === 'Tie.') {
  score.ties ++ ;
}

document.querySelector('.js-result')
 .innerHTML = `${result}.`;

 document.querySelector('.js-moves')
 .innerHTML = `You <img class="move-emoji" src="${playerMove}-emoji.png" alt="">-<img class="move-emoji" src="${computerMove}-emoji.png" alt=""> Computer`


localStorage.setItem('score',JSON.stringify(score))

updateScore();


}

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
    }
    else if ( randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
    }

    return computerMove;
  
  }

 
  function updateScore() {
    document.querySelector('.js-score')
 .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  }

 