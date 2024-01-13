const failAnswerPhrases = [
    "Вы загадали неправильное число!\n\u{1F914}",
    "Я сдаюсь..\n\u{1F92F}",
    "\u{1F92C}...\nНе угадал.",
    "Не повезло, не угадал\n\u{1F622}",
    "Там же не было неправльных ответов?\n\u{1F612}"
];

const nextAnswerPhrases = [
    "Вы загадали число ",
    "Вы загадали число ",
    "Может, ваше число ",
    "И ваше число... ",
    "Это число "
];

const successAnswerPhrases = [
    "Я всегда угадываю\n\u{1F60E}",
    "Это было легко\u{1F61D}",
    "Я выиграл\u{1F607}",
    "Победа за мной\n\u{1F973}",
    "Victory!\n\u{1F638}"
];

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

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `${nextAnswerPhrases[0]} ${answerNumber }?`;

// Рестарт программы
document.querySelector('#btnRetry').addEventListener('click', function () {
    //Переписать все
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    gameRun = true;
})

// Кнопка больше
document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){ // Игрок сжулничал и давал не правильные ответы

            // Я так понимаю, надо было сделать установить значение answerPhrase через switch
            // Например:
            // switch (phraseRandom) {case 1: "фраза 1" break; case 2: "фраза 2" break; и т.д.}
            // Но я так делать не буду. Кроме того как уметь использовать разничние конструкции,
            // нужно еще, знать где их нужно использовать.
            // Я использовать массив со строками, и работал с ним самым оптимальным способом.

            const phraseRandom = Math.round( Math.random() * (failAnswerPhrases.length - 1));
            const answerPhrase = failAnswerPhrases[phraseRandom];            
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else { //Продолжить поиск выше
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;

            //Вывод числа в прописью, если строка получается менее 20 символов (15 баллов)
            
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round( Math.random() * (nextAnswerPhrases.length - 1));
            answerField.innerText = `${nextAnswerPhrases[phraseRandom]} ${answerNumber }?`;
        }
    }
})

// Кнопка меньше
// Написать функционал

// Кнопка Верно!
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * (successAnswerPhrases.length - 1));
        answerField.innerText = successAnswerPhrases[phraseRandom];

        gameRun = false;
    }
})