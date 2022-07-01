/*function computerPlay() {
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
round();*/
/*let button = document.querySelector('.buttons');
button.addEventListener('click', () => {console.log('hello world')});*/


/*
function buttonChoose() {
    let button_rock = document.querySelector('.buttons .button_rock');
    button_rock.addEventListener('click', () => { return 'rock'});
    let button_scissors = document.querySelector('.buttons .button_scissors');
    button_scissors.addEventListener('click', () => {return 'scissors'});
    let button_paper = document.querySelector('.buttons .button_paper');
    button_paper.addEventListener('click', () => { return 'paper'});
}*/
/*let button_rock = document.querySelector('.buttons .button_rock');
let button_scissors = document.querySelector('.buttons .button_scissors');
let button_paper = document.querySelector('.buttons .button_paper');
function buttonChoose() {
    if (button_rock.addEventListener('click', () => { console.log('rock')}));
    else if (button_scissors.addEventListener('click', () => {console.log('scissors')}));
    else if (button_paper.addEventListener('click', () => { console.log('paper')}));
}
*/
let button_rock = document.querySelector('.buttons .button_rock');
let button_scissors = document.querySelector('.buttons .button_scissors');
let button_paper = document.querySelector('.buttons .button_paper');
button_rock.addEventListener('click', () => { rockFunction()});
button_scissors.addEventListener('click', () => { scissorsFunction()});
button_paper.addEventListener('click', () => { paperFunction()});


function computerPlay() {
    let a = Math.random();
    if (a<=0.333333333333) {
        return 'rock';
    }
    else if (a<=0.666666666666) {
        return 'scissors';
    }
    else if (a<=0.999999999999){
        return 'paper';
    }
}

let player = 0;
let computer = 0;
let counter = document.querySelector('.counter .count');
counter.textContent =`The Player Score is - ${player} The Computer Score is - ${computer}`;

function checker(){
    if (player==3) {
        alert('Player WIN!');
        player = 0;
        computer = 0;
        counter.textContent =`The Player Score is - ${player} The Computer Score is - ${computer}`;
        return 'Player WIN!';
    }
    else if(computer==3){
        alert('Computer WIN!');
        player = 0;
        computer = 0;
        counter.textContent =`The Player Score is - ${player} The Computer Score is - ${computer}`;
        return 'Computer WIN!';
    }
}
function rockFunction() {
    let computerSelection = computerPlay();
    if (computerSelection ==='scissors'){
        player = player +1;
        counter.textContent =`The Player Score is - ${player} The Computer Score is - ${computer}`;
        alert('You win! Rock beats Scissors');
        checker();
    }
    else if (computerSelection==='paper'){
        computer = computer +1;
        counter.textContent =`The Player Score is - ${player} The Computer Score is - ${computer}`;
        alert('You lose! Paper beats Rock');
        checker();}
    else if (computerSelection==='rock'){
        alert('Draw game! Both thrown Rock');
        checker();
    }
}
function paperFunction(){
    let computerSelection = computerPlay();
    if (computerSelection==='rock'){
        player = player +1;
        counter.textContent =`The Player Score is - ${player} The Computer Score is - ${computer}`;
        alert('You win! Paper beats Rock');
        checker();
    }
    else if(computerSelection==='scissors'){
        computer = computer +1;
        counter.textContent =`The Player Score is - ${player} The Computer Score is - ${computer}`;
        alert('You lose! Scissors beats Paper');
        checker();
    }
    else if(computerSelection==='paper'){
        alert('Draw game! Both thrown Paper');
        checker();
    }
}
function scissorsFunction(){
    let computerSelection = computerPlay();
    if (computerSelection==='paper'){
        player = player +1;
        counter.textContent =`The Player Score is - ${player} The Computer Score is - ${computer}`;
        alert('You win! Scissors beats Paper');
        checker();
    }
    else if(computerSelection==='rock'){
        computer = computer +1;
        counter.textContent =`The Player Score is - ${player} The Computer Score is - ${computer}`;
        alert('You lose! Rock beats Scissors');
        checker();
    }
    else if(computerSelection==='scissors'){
        alert('Draw game! Both thrown Scissors');
        checker();}
}

