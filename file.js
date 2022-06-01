function computerPlay() {
    let a = Math.random();
    if (a<=0.333333333333) {
        return 'rock';
    }
    else if (a<=0.666666666666) {
        return 'scissors';
    }
    else {
        return 'paper';
    }
}
let player = 0;
let computer = 0;
function checker(){
    if (player==5) {
        alert('Player WIN!');
        return 'Player WIN!';
    }
    else if(computer==5){
        alert('Computer WIN!');
        return 'Computer WIN!';
    }
    else round();
}
function round(){
    let playerSelection = prompt('Make your Choose: Rock, Paper or Scissors?', '');
    let computerSelection = computerPlay();
    if (playerSelection.toLowerCase()==='rock'&&computerSelection ==='scissors'){
        player = player +1;
        alert('You win! Rock beats Scissors');
        checker();
    }
    else if(playerSelection.toLowerCase()==='scissors'&&computerSelection==='paper'){
        player = player +1;
        alert('You win! Scissors beats Paper');
        checker();
    }
    else if(playerSelection.toLowerCase()==='paper'&&computerSelection==='rock'){
        player = player +1;
        alert('You win! Paper beats Rock');
        checker();
    }
    else if(playerSelection.toLowerCase()==='rock'&&computerSelection==='paper'){
        computer = computer +1;
        alert('You lose! Paper beats Rock');
        checker();
    }
    else if(playerSelection.toLowerCase()==='scissors'&&computerSelection==='rock'){
        computer = computer +1;
        alert('You lose! Rock beats Scissors');
        checker();
    }
    else if(playerSelection.toLowerCase()==='paper'&&computerSelection==='scissors'){
        computer = computer +1;
        alert('You lose! Scissors beats Paper');
        checker();
    }
    else if(playerSelection.toLowerCase()==='rock'&&computerSelection==='rock'){
        alert('Draw game! Both thrown Rock');
        checker();
    }
    else if(playerSelection.toLowerCase()==='paper'&&computerSelection==='paper'){
        alert('Draw game! Both thrown Paper');
        checker();
    }
    else if(playerSelection.toLowerCase()==='scissors'&&computerSelection==='scissors'){
        alert('Draw game! Both thrown Scissors');
        checker();
    }
    else {alert('Error, please make your choose again!');
    checker();}
}
round();

/*function game(){
    let player = 1;
    let computer = 1;    
    
    if (player==5){
        return 'Player is the Winner!';
    }
    else if (computer==5){
        return 'Computer is the Winner!';}

    else if (round()=='You win! Paper beats Rock'||round()=='You win! Rock beats Scissors'||round()=='You win! Scissors beats Paper'){
        for (i=0;i<5;i++){
        player = player * i;}
        }
    else if (round()=='You lose! Paper beats Rock'||round()=='You lose! Rock beats Scissors'||round()=='You lose! Scissors beats Paper'){
        for (i=0;i<5;i++) {
        computer = computer * i;}
        }
        
        }*/
/*function game(){
    let player = 1;
    let computer = 1;
    for (i=1;i<=5;i++){
        if (round()=='You win! Paper beats Rock'||round()=='You win! Rock beats Scissors'||round()=='You win! Scissors beats Paper'){
            player = player * i;
        }
        else if (round()=='You lose! Paper beats Rock'||round()=='You lose! Rock beats Scissors'||round()=='You lose! Scissors beats Paper'){
            computer = computer * i;
        }}
        if (player==5){
            return 'Player is the Winner!';
        }
        else if (computer==5){
            return 'Computer is the Winner!';
        }*/

