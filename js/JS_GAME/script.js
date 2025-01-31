"use strict";
let prompt_text = document.getElementById("text");
prompt_text.value = ""; 
let correctNumber = Math.floor(Math.random() * 100);
let attempts = 1;
let tryagain;
let feedback_text = document.getElementById("feedback");
feedback_text.textContent = "Введи число от 0 до 99"; 
let submitButton = document.getElementById("submit_button");
let guessNumber;
let restartButton = document.getElementById("restart");
submitButton.addEventListener("click", function(){
    guessNumber = prompt_text.value;
    checkNumbers();
    prompt_text.value = ""; 
});

function checkNumbers() {
    if(guessNumber === "dev"){
        console.log("Количество попыток: " + attempts);
        console.log("Текущее число: " + correctNumber);

    }else if (guessNumber !== correctNumber && guessNumber > correctNumber) {
        feedback_text.textContent = "Не угадал! Моё число меньше. Попробуй еще раз."; 
        ++attempts;
    }else if (guessNumber!== correctNumber && guessNumber < correctNumber) {
        feedback_text.textContent = "Не угадал! Моё число больше. Попробуй еще раз."; 
        ++attempts;
    }else{
        if (attempts < 10 && attempts > 1){
        feedback_text.textContent = "Поздравляю! Ты угадал моё число! Это было число " + correctNumber + "." + " Ты угадал за " + attempts + " попытки."; 
        }else if (attempts == 1){
            feedback_text.textContent = "Поздравляю! Ты угадал моё число! Это было число " + correctNumber + "." + " Ты угадал за " + attempts + " попытку. Да ты чемпион!"; 
        }else{
            feedback_text.textContent = "Поздравляю! Ты угадал моё число! Это было число " + correctNumber + "." + " Ты угадал за " + attempts + " попыток.";
        }
        restartButton.classList.remove("hidden");
        restartButton.classList.toggle("move");
        restartButton.addEventListener("click", function(){
            window.location.href = 'game.html';
        });
    }
}
