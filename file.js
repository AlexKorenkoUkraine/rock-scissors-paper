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
alert(computerPlay());