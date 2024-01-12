//Все текстовые константы переписать сюда

//Заменить методы window на что-нибудь из bootstrap (20 баллов)
let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

//Валидация введенных значений (через дизъюнкции) (10 баллов)

//Ограничение по минимому и максимому для введенных значений (через тернарный оператор) (10 баллов)
// мин = -999   макс = 999

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');//Заменить код на более актуальный
const answerField = document.getElementById('answerField');//Заменить код на более актуальный

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

// Рестарт программы
document.getElementById('btnRetry').addEventListener('click', function () {//Заменить код на более актуальный
    //Переписать все
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

// Кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {//Заменить код на более актуальный
    if (gameRun){
        if (minValue === maxValue){ // Игрок сжулничал и давал не правильные ответы
            const phraseRandom = Math.round( Math.random());

            //Переделать варианты ответа (5 баллов)
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else { //Продолжить поиск выше
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;

            //Вывод числа в прописью, если строка получается менее 20 символов (15 баллов)
            
            orderNumberField.innerText = orderNumber;

            //Переделать варианты ответа (5 баллов)
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

// Кнопка меньше
// Написать функционал

// Кнопка Верно!
document.getElementById('btnEqual').addEventListener('click', function () {//Заменить код на более актуальный
    if (gameRun){

        //Переделать варианты ответа (5 баллов)
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`

        gameRun = false;
    }
})

