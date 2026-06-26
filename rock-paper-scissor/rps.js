let Score=JSON.parse(localStorage.getItem('score')) || {win:0 ,lose:0 ,tie:0,game:'new'}
let result=''
function computerMove() {
  const x=Math.random()
  let computermove=0
  if(1/3>= x >0){
    computermove='Rock'
  }
  else if(2/3>= x >1/3){
    computermove='Paper'
  }
  else{
    computermove='Scissor'
  }
  return computermove
}

function playGame(playermove){
  const compmove=computerMove()
  if(playermove==='Rock'){
    if(compmove==='Scissor'){
      Score.win+=1;
      result='win';
    }
    else if(compmove==='Paper'){
      Score.lose+=1;
      result='lose';
    }
    else{
      Score.tie+=1;
      result='tie';
    }
  }
  else if(playermove==='Paper'){
    if(compmove==='Scissor'){
      Score.win+=1;
      result='win';
    }
    else if(compmove==='Rock'){
      Score.lose+=1;
      result='lose';
    }
    else{
      Score.tie+=1;
      result='tie';
    }
  }
  else if(playermove==='Scissor'){
    if(compmove==='Paper'){
      Score.win+=1;
      result='win';
    }
    else if(compmove==='Rock'){
      Score.lose+=1;
      result='lose';
    }
    else{
      Score.tie+=1;
      result='tie';
    }
  }
  Score.game='old'
  localStorage.setItem('score',JSON.stringify(Score))
  displayScore()
}

function resetScore(){
  Score.win=0;
  Score.lose=0;
  Score.tie=0;
  Score.game='new'
  localStorage.removeItem('score')
  displayScore()
}

function displayScore(){
  if (Score.game==='old'){
    document.querySelector('.js-score').innerHTML=
                    `Result of the game 
                      ${result}
                      Score of the game  
                      Win:${Score.win}
                      Lose:${Score.lose}
                      Tie:${Score.tie}`
  }
  else{
    document.querySelector('.js-score').innerHTML='Let\'s play Rock-Paper-Scissor'
  }
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = computerMove(); 
            playGame(playerMove); 
        }, 1000); 

        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}