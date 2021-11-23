'use strict';




let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore=0;

let displaymsg=function(message){
    document.querySelector('.message').textContent=message;
}

let displayScore=function(remscore){
    document.querySelector('.score').textContent=remscore;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displaymsg('⛔No Number');
    } else if (secretNumber === guess) {
    
        displaymsg('🎉Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    } else if (guess!= secretNumber) {
        if (score > 1) {
            
            displaymsg(guess>secretNumber?'📈 Too High':'📉 Too Low');
            score--;
            displayScore(score);
            document.querySelector('body').style.backgroundColor = 'blue';
        } else {
            displaymsg('💥 You lost the game');
            displayScore(0);
            document.querySelector('body').style.backgroundColor = 'red';
        }
     }
})

document.querySelector('.again').addEventListener('click', function(){

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score=20;
    displaymsg('Start guessing');
    displayScore(score);
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='lightseagreen';


})