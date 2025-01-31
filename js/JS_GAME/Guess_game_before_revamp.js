"use strict";
let tryagain;
let tries = 1;
let guesss;
let correctAnswer = Math.floor(Math.random() * 100);
let gameConfirmation;
gameConfirmation = confirm("Привет! Я хочу поиграть с тобой в игру. Ты заинтересован?");
if (gameConfirmation){
    guess();
}else{
    alert("Ну нет так нет.");
}
function guess(){

    let guessedNumber = prompt("Я загадал число от 0 до 99. Попробуй угадать! Простая надпись null выводит тебя из игры.");

    if( guessedNumber == "null"){
        alert("Игра была прервана пользователем.");
        return;

    }else{}
    if(guessedNumber == correctAnswer){
        alert("Правильно! Это было число " + correctAnswer + ". Тебе потребовалось " + tries + " попыток.");
        tryagain = confirm("Хочешь попробовать еще раз?");
        if(tryagain){
            restartGame();
        }else{
            alert("Игра закончилась.");
            return;
        }
    }else{}
    if (guessedNumber !== correctAnswer) {
        if (guessedNumber < correctAnswer && guessedNumber !== correctAnswer) {
        alert("Неправильно! Твоё число было меньше моего. Попробуй еще раз.");
        } else if (guessedNumber > correctAnswer && guessedNumber !== correctAnswer) {
        alert("Неправильно! Твоё число было больше моего. Попробуй еще раз.");
        }
        ++tries;
        guess();
    
    }else{}
}
function restartGame(){
    correctAnswer = Math.floor(Math.random() * 100);
    tries = 1;
    guess();
}
function dev(){
    console.log("Текущее число: " + correctAnswer);
    console.log("Количество попыток: " + tries);
}

let button = document.querySelector('#button');
let button2 = document.querySelector('#button_');
button.addEventListener('click', dev);
button2.addEventListener('click', function() {
	console.log('!!!');
});