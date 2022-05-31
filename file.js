function computerPlay() {
    let a = Math.random();
    if (a<=0.333333333333) {
        return 'rock';
    }
    else if (a<=0.6666666666) {
        return 'scissors';
    }
    else {
        return 'paper';
    }
}
function round(){
    let playerSelection = prompt('Make your Choose: Rock, Paper or Scissors?', '');
    let computerSelection = computerPlay();
    if (playerSelection.toLowerCase()==='rock'&&computerSelection =='scissors'){
        return 'You win! Rock beats Scissors';
    }
    else if(playerSelection.toLowerCase()==='scissors'&&computerSelection==='paper'){
        return 'You win! Scissors beats Paper';
    }
    else if(playerSelection.toLowerCase()==='paper'&&computerSelection==='rock'){
        return 'You win! Paper beats Rock';
    }
    else if(playerSelection.toLowerCase()==='rock'&&computerSelection==='paper'){
        return 'You lose! Paper beats Rock';
    }
    else if(playerSelection.toLowerCase()==='scissors'&&computerSelection==='rock'){
        return 'You lose! Rock beats Scissors';
    }
    else if(playerSelection.toLowerCase()==='paper'&&computerSelection==='scissors'){
        return 'You lose! Scissors beats Paper';
    }
    else if(playerSelection.toLowerCase()==='rock'&&computerSelection==='rock'){
        return 'Draw game! Both thrown Rock';
    }
    else if(playerSelection.toLowerCase()==='paper'&&computerSelection==='paper'){
        return 'Draw game! Both thrown Paper';
    }
    else if(playerSelection.toLowerCase()==='scissors'&&computerSelection==='scissors'){
        return 'Draw game! Both thrown Scissors';
    }
    else return 'Error, please make your choose again!';
}
alert(round());

