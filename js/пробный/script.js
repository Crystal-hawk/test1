"use strict";
//let a = parseFloat(prompt("Введите 1 сторону"));
//let b = parseFloat(prompt("Введите 2 сторону"));
//let c = parseFloat((a + b) * 2);
//alert(c);
// let array = Array('пн','вт','ср','чт','пт','сб');
// let day = prompt("Введите недостающий день недели : пн вт ср чт пт сб..?");
// array[array.length] = day;

// alert(array);
// let day = prompt('Введите число от 1 до 31 '); 

// if (day >= 1 && day <= 10) {
//     alert("Первая декада");
// } else if (day >= 11 && day <= 20) {
//     alert("Вторая декада");
// } else if (day >= 21 && day <= 31) {
//     alert("Третья декада");
// } else {
//     alert("Некорректное число, пожалуйста, введите число от 1 до 31.");
// }



//задание 1 Задание 1 Напишите программу, которая выводит на экран только четные числа от 1 до 20.
// for (let number = 1; number <= 20; number++) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }


//Задание 2 Дан массив с числами. let arr = [0,1,3,4,6,10,15,16,17,18,23]; С помощью цикла выведите только простые числа.
// let arr = [0, 1, 3, 4, 6, 10, 15, 16, 17, 18, 23];

// function isPrime(num) {
//     if (num < 2) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }


// for (let number of arr) {
//     if (isPrime(number)) {
//         console.log(number);
//     }
// }

// Задание 3 Выведите на экран следующую пирамидку:
// XXXXXXXXXX
// XXXXXXXX
// XXXXXX   
// xXXX
// XX

// let rows = 5;
// let char = 'X';
// for (let i = 5; i>0; i--){
//     console.log(char.repeat(rows * 2));
//     rows--;

// }



//function getSqrt(num) {
//     return Math.sqrt(num) 
// }
// console.log(getSqrt(3) + getSqrt(4));

// function getTwo(num) {
//     let jfd = 0;
//     while (num >= 10){
//         num = num/2;
//         jfd++;
//     }
//     return jfd;


// }
// console.log(getTwo(10));


// let arr = [1,2,9,9,4,5,6,7]

// function getArr(num) {
//      for(let i = 0;  i < arr.length - 1; i++){
        
//         if(arr[i] == arr[i + 1]){
//             return true;
        

//         }
//      }
//      return false;

// }
// function getMsg(){
//     if(getArr(arr)){
//         console.log("Дубликаты есть");

//     }else{
//         console.log("Дубликатов нет");
//     }
// }
// getMsg();



// let arr = [0, 1, 3, 4, 6, 10, 15, 16, 17, 18, 23];



// function getRandomElement(arr) {

//     const randomIndex = Math.floor(Math.random() * arr.length);

//     return arr[randomIndex];
// }

// console.log(getRandomElement([0, 1, 3, 4, 6, 10, 15, 16, 17, 18, 23]));


// let arr = [2025, 6, 10];
// let [year, month, day] = arr;
// console.log(month)




// let arr = ['Jackson', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, department, position, salary] = arr;
// console.log(position)



// function addZero(num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }

// let date = new Date();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб',]
// console.log(days[date.getDay()])
// console.log(
//     addZero(date.getHours())+
//     ':' +
//     addZero(date.getMinutes())+
//     ':' +
//     addZero(date.getSeconds())+
//     ' ' +
// 	addZero(date.getFullYear()) + '-' + 
// 	addZero(date.getMonth() + 1) + '-' +
// 	addZero(date.getDate())

// );

// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// console.log(months[date.getMonth()])


// let date = new Date(2006, 8, 9); 
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);


// let now  = new Date();
// let date = new Date(1965, 6, 5 );

// let diff = now.getTime() - date.getTime();
// console.log(diff / (1000 * 60 * 60 * 24 * 30 * 12 ));




// function daysUntilNewYear(dateString) {
    
//     const parts = dateString.split('.');
//     const day = parseInt(parts[0], 10);
//     const month = parseInt(parts[1], 10);
//     const year = parseInt(parts[2], 10);

    
//     const inputDate = new Date(year, month - 1, day);

    
//     const nextNewYear = new Date(year + 1, 0, 1); 

    
//     const differenceInTime = nextNewYear - inputDate;

   
//     const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

//     return differenceInDays;
// }


// const userInput = prompt("Введите дату в формате 30.09.2024 :");
// const daysRemaining = daysUntilNewYear(userInput);


// alert('До ближайшего Нового года осталось' + daysRemaining +  'дней.');



// let randomNumber = Math.floor(Math.random() * 100);
//     let attempts = 1; 
//     let gamestop;
//     alert (randomNumber);
//     gamestop = confirm("Шалом, играть будем?");

//     if (gamestop) {
//         startGame();
//     }else{
//         alert("Ну и гуляй")
//     }
// console.log(confirm)
// function startGame() {
//     while (true) {
        
//         let userGuess = prompt("Угадай число от 0 до 99:");
//         userGuess = Number(userGuess);

//         if (isNaN(userGuess)) {
//             alert("Введи число!"); 
//             continue; 
//         }

//         if (userGuess < randomNumber) {
//             alert("Мало!");
//             attempts++;
//         } else if (userGuess > randomNumber) {
//             alert("Много!");
//             attempts++;
//         } else {
//             alert(`Угадал число ${randomNumber} за ${attempts} попыток.`); 
//             attempts = 1
//             break;
            
//         }
//     }

//     if (confirm("Го некст?")) {
//          randomNumber = Math.floor(Math.random() * 100);
//         startGame();
//     } else {
//         alert("Спасибо за игру!");
//     }
// }


// 1
// let arr = [6, 2, 7, 4, 8, 3, 9, 1];


// let res = arr.map(function(elem) {
// 	return elem + 1;
// });

// console.log(res);

// 2

// let arr = ['ОДИН', 'ДВА', 'ТРИ']

// let res = arr.reduce(function(sum, elem) {
// 	return sum + '-' +  elem;
// });

// console.log(res);

// 3
// let arr = [6, 2, 4, 6, 8, 3, 9, 6, 3, 3]

// function getEvenNumbers() {
//   let evenNumbers = [];

//   arr.forEach(function(num) {
//     if (num % 2 === 0) {
//       evenNumbers.push(num);
//     }
//   });

//   return evenNumbers;
// }
// getEvenNumbers(arr);
// console.log(getEvenNumbers(arr)); 



//1
function generateRandomNumber() {
  let randomNumber = Math.ceil(Math.random() * (200 - 100) + 100);
  console.log(randomNumber);
  return Math.sqrt(randomNumber);
}
let result = generateRandomNumber();
console.log(result);

//2 
function processString(str) {
  if (str.startsWith('Good')) {
    return str.slice(5).toUpperCase();
  } else {
    return str;
  }
}

let inputString = 'Good morning!';
console.log(processString(inputString)); 


//3 
let Arr = [5, 2, 15, 6, 8, 30, 9, 6, 35, 3];
function processArray(arr) {
  arr.push(10);
  let result = arr.filter(function(num) {
    return num % 5 === 0;
  });

  return result;
}
console.log(processArray(Arr)); 




// let elem = document.getElementById('elem')
// document.addEventListener('mousemove', function (event) {
//   elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

// let wrapper = document.querySelector('.wrapper');
// let block = document.querySelector('.block-center');
// document.addEventListener('click', function (event) {
//   if(event.target === block){
//     wrapper.classList.toggle('circle');
//   }
// });


// let input = document.querySelector('input');
// let p = document.querySelector('p');

// input.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//       p.textContent = input.value;
//       input.value = '';
// }});

// let inpmax = document.getElementById('max');
// let inpmin = document.getElementById('min');
// let playButton = document.getElementById('submit_button');

// let max, min;
// playButton.addEventListener('click', function () {
//   if (inpmax != '' && inpmin!== '' || inpmin != inpmax) {
//   max = Math.floor(Math.random() * (inpmax.value - inpmin.value + 1) + inpmin.value);
//    min = Math.floor(Math.random() * (inpmax.value - inpmin.value + 1) + inpmin.value);
//   console.log("Максимальное число: " + max + ", Минимальное число: " + min);
//   } else {
//     alert('Введите корректные значения!');
//   }
// });


//let arr = ['megafon', 'telefon', 'buffon'];




// let ul = document.querySelector('ul');
// let obj = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// createList();
// function createList() {
// for (let elem of obj){
//     let li = document.createElement('li');
//     li.setAttribute('order' , obj.indexOf(elem) + 1);

//     li.textContent = li.getAttribute('order') +  "." +  " " + elem;
//     ul.appendChild(li);
//     li.addEventListener('click', func)
// }
// }
// let counter = 0;
// for (let elem of obj){
//     counter++;
//     let p = document.createElement('p');
//     p.textContent = elem;
//     p.setAttribute('order', counter);
//     div.appendChild(p);
//     p.addEventListener('click', func);
// }
// function func() {
//     this.innerHTML = `<span class='first'>${this.getAttribute('order')}</span>` + this.textContent;
//     this.removeEventListener('click', func);
// }



