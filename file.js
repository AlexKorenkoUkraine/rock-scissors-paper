function computerPlay() {
    let a = Math.random();
    if (a<=0.333333333333) {
        return 'Rock';
    }
    else if (a<=0.6666666666) {
        return 'Scissors';
    }
    else {
        return 'Paper';
    }
}
function round(){
    let playerSelection = computerPlay();
    let computerSelection = computerPlay();
    if (playerSelection==='Rock'&&computerSelection ==='Scissors'){
        return 'You win! Rock beats Scissors';
    }
    else if(playerSelection==='Scissors'&&computerSelection==='Paper'){
        return 'You win! Scissors beats Paper';
    }
    else if(playerSelection==='Paper'&&computerSelection==='Rock'){
        return 'You win! Paper beats Rock';
    }
    else if(playerSelection==='Rock'&&computerSelection==='Paper'){
        return 'You lose! Paper beats Rock';
    }
    else if(playerSelection==='Scissors'&&computerSelection==='Rock'){
        return 'You lose! Rock beats Scissors';
    }
    else if(playerSelection==='Paper'&&computerSelection==='Scissors'){
        return 'You lose! Scissors beats Paper';
    }
    else if(playerSelection==='Rock'&&computerSelection==='Rock'){
        return 'Draw game! Both thrown Rock';
    }
    else if(playerSelection==='Paper'&&computerSelection==='Paper'){
        return 'Draw game! Both thrown Paper';
    }
    else if(playerSelection==='Scissors'&&computerSelection==='Scissors'){
        return 'Draw game! Both thrown Scissors';
    }
    else return 'Error';
}

