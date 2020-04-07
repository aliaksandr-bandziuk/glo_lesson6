'use strict';

function yourNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    +prompt('Угадай число от 1 до 100');
    return yourNumber();

    function answer() {
        if (yourNumber < randomNumber) {
            alert('Загаданное число меньше');
        }
        if (yourNumber === isNaN) {
            +prompt('Введи число!');
        }
        if (yourNumber === false) {
            alert('Ты проиграл');
        }
    }
}