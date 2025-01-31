"use strict";
/*let a = 12345;
let b = a.toString();
console.log(b);
console.log(parseInt(b[0]) + parseInt(b[1]) + parseInt(b[2]) + parseInt(b[3])+ parseInt(b[4]));*/
// let a = prompt("Введите число");
// let b = 'сумма цифр числа ' + parseInt(a) + ' равняется: ' + parseInt(a).toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
// alert(b);

// let a = prompt("Введите сторону по вертикали");
// let b = prompt("Введите сторону по горизонтали");
// let per = parseInt(a) * 2 + parseInt(b) * 2;
// alert(per);
// document.write('Данная информация является конфиденциальной. Если вы не являетесь сотрудником центра разработок AUT, то немедленно сожгите данный документ.')


// let a = prompt("Введите 1 число");
// let b = prompt("Введите 2 число");
// function getRandomArbitary(min, max) {
// 	return Math.random() * (max - min) + min;
// }



// 1 Создайте функцию, которая генерирует случайное число от 50 до 150 , округляет его вниз, затем возвращает его квадратный корень с точностью до двух знаков после запятой.
// let random;
// function getRandomNumber(min, max) {
// 	random = Math.floor(Math.random() * (max - min + 1) + min);
// 	return Math.sqrt(random).toFixed(2);

// }
// console.log(getRandomNumber(50,150));



// 2 Создайте функцию, которая принимает строку и проверяет, начинается ли она с подстроки "Test". Если да, возвращает строку без 3 последних символов в нижнем регистре.
// let str = "Test hi hello world cOOl NUMEBER OOO";
// function checkString(str) {
//     if( str.includes('Test')) {
//          return str.slice(0 , -3).toLowerCase();
//     }
// }
// console.log(checkString(str)); 
// 3 Создайте функцию, которая принимает массив строк, удаляет все строки, содержащие подстроку "remove", затем добавляет строку "added" в конец массива.
// let arr= ['remove', 'add', 'remove', 'remove', 'remove', 'remove', 'remove', 'remove', 'remove', 'remove'];
// function checkArray(arr) {
// 	for(let i=0; i < arr.length; i++){
// 		if(arr[i] === 'remove'){
// 			arr.splice(i, 1);
//             i--;
// 			arr.push('added');
//         }
// 	} 	
// }

// checkArray(arr);

// console.log(arr);
let login = 'adminadmin';
let password = '1234567891011';
let loginInput = document.querySelector('input[type="text"]');
let passwordInput = document.querySelector('input[type="password"]');
let button = document.querySelector('input[type="button"]');
button.addEventListener('click', checkloginCredentials);

function validateLogin(input) {
    let regex = /^[a-zA-Z]+$/;
    return regex.test(input);
}


function checkloginCredentials() {
    loginInput.classList.remove('success');
    loginInput.classList.remove('fail');
    passwordInput.classList.remove('success');
    passwordInput.classList.remove('fail');

    if (loginInput.value === login && passwordInput.value === password && loginInput.value.length >= 8 && passwordInput.value.length >= 11 && validateLogin(passwordInput.value) && validateLogin(loginInput.value)) {
        alert('Вход успешен!');
        loginInput.classList.add('success');
        passwordInput.classList.add('success');
    }else if (loginInput.value.length < 8 && passwordInput.value.length < 8) {
        alert('Логин и пароль должны содержать минимум 8 символов!');
        loginInput.classList.add('fail');
        passwordInput.classList.add('fail');
    } else if (!validateLogin(passwordInput.value)) {
        alert('Пароль должен только латиницу и цифры!');
        loginInput.classList.add('fail');
        passwordInput.classList.add('fail');
    }else if (!validateLogin(loginInput.value)) {
        alert('Логин должен только состоять из латинских букв!');
        loginInput.classList.add('fail');
        passwordInput.classList.add('fail');
    }
    else {
        alert('Неправильный логин или пароль!');
        loginInput.classList.add('fail');
        passwordInput.classList.add('fail');
    }
}