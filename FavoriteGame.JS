let score = JSON.parse(localStorage.getItem('score')) ||{ 

  wins : 0,
  losses: 0,
  ties: 0
};
// updateScores();

//A function that computes players's choice
function computeResult(myChoice){
  let computerMove = determineComputerMove();
  let result = '';
  if(myChoice === 'Rock'){

    if(computerMove === 'Rock'){
      result = 'You tie';
    }else if (computerMove === 'Paper'){
      result = 'You win!';
    }else if (computerMove === 'Scissors'){
      result = 'You lose';
    }

  }else if(myChoice === 'Paper'){
    result = '';
    if(computerMove === 'Rock'){
      result = 'You lose';
    }else if (computerMove === 'Paper'){
      result = 'You tie';
    }else if (computerMove === 'Scissors'){
      result = 'You win!';
    }

   
  }else if (myChoice === 'Scissors'){
    result = '';


    if(computerMove === 'Rock'){
      result = 'You win!';
    }else if (computerMove === 'Paper'){
      result = 'You lose';
    }else if (computerMove === 'Scissors'){
      result = 'You tie';
    }

  }

  //Updating the scores
  if(result === 'You win!'){
    score.wins += 1; 
  }else if (result === 'You lose'){
    score.losses += 1;
  }else if(result === 'You tie'){
    score.ties += 1;
  }
  //Saving the scores in local storage
  localStorage.setItem('score', JSON.stringify(score));

  updateScores();

  document.querySelector('.js-result')
    .innerHTML = result;
    
    document.querySelector('.js-moves')
      .innerHTML = `You ${myChoice} - ${computerMove} computer`;

    //Displaying the results and the scores in a popup
 
}

function updateScores(){
  document.querySelector('.js-updateScores')
    .innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;

}

function resetScores(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
}

//This function computes the computer move and returns the move
function determineComputerMove(){
 let randomNumber = Math.random();
 let computerMove = '';

  if(0 < randomNumber && randomNumber < 1/3){
  computerMove = 'Rock';

  }else if(1/3 < randomNumber && randomNumber < 2/3){
    computerMove = 'Paper';

  }else if(2/3 < randomNumber && randomNumber < 1){
    computerMove = 'Scissors';
  }
  
  return computerMove;

}

(function displayColors(){
  let colors = ['Red', 'Green','Blue', 'yellow'];
  let i = 0;
  // for(let i =0; i < colors.length;){
  //   document.querySelector('.paperButton').innerHTML=i;
  // }

  setInterval(() => {
    i++;
    document.querySelector('.paperButton').style.color = colors[i];
    if(i === colors.length){
      i = -1;
    }
  }, 200);
})();