'use strict';

const firstStep = document.querySelector('.first');
const secondStep = document.querySelector('.second');
const thirdStep = document.querySelector('.third');
const fourthStep = document.querySelector('.fourth');
const howTitle = document.querySelector('.how__title');
const howText_1 = document.querySelector('.how__p-one');
const howText_2 = document.querySelector('.how__p-two');
const howImg = document.querySelector('.how__img');
let onStep;
let imgStep = 1;

function noOn() {
    onStep = document.querySelector('.on');
    onStep.classList.remove('on');
    switch(imgStep) {
        case 1:
            howImg.classList.remove('first__img');
            break;
        case 2:
            howImg.classList.remove('second__img');
            break;
        case 3:
            howImg.classList.remove('third__img');
            break;
        case 4:
            howImg.classList.remove('fourth__img');
            break;
    } 
}

function hideHowText_2() {
    howText_2.style.display = 'none';
}

firstStep.addEventListener('click', () => {
    noOn();
    firstStep.classList.add('on');
    howImg.classList.add('first__img');
    howTitle.innerHTML = 'Проводим консультацию';
    howText_2.style.display = 'inline';
    howText_1.innerHTML = `Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. 
    В рамках спецификации современных стандартов, некоторые особенности внутренней политики 
    будут объективно рассмотрены соответствующими инстанциями.`;
    howText_2.innerHTML = `А также представители современных социальных резервов, 
    инициированные исключительно синтетически, ограничены исключительно образом мышления. 
    Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, 
    современные исследования подвергнуты целой серии независимых исследований. 
    Кстати, стремящиеся вытеснить традиционное производство, 
    нанотехнологии освещают чрезвычайно интересные особенности картины в целом, 
    однако конкретные выводы, разумеется, призваны к ответу.`;
    imgStep = 1;
});

secondStep.addEventListener('click', () => {
    noOn();
    secondStep.classList.add('on');
    howImg.classList.add('second__img');
    howTitle.innerHTML = 'Составляем смету';
    hideHowText_2();
    howText_1.innerHTML = `Внедрения и модернизации приоритизации разума над эмоциями. 
    В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут 
    объективно рассмотрены соответствующими инстанциями. 
    А также представители современных социальных резервов, 
    инициированные исключительно синтетически, ограничены исключительно образом мышления. 
    Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, 
    современные исследования подвергнуты целой серии независимых исследований.`;
    imgStep = 2;
});

thirdStep.addEventListener('click', () => {
    noOn();
    thirdStep.classList.add('on');
    howImg.classList.add('third__img');
    howTitle.innerHTML = 'Привлекаем подрядчиков';
    hideHowText_2();
    howText_1.innerHTML = `Идейные соображения высшего порядка, 
    а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. 
    Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: 
    высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. 
    Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о 
    возможностях системы массового участия. Принимая во внимание показатели успешности, 
    постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет 
    выполнить важные задания по разработке прогресса профессионального сообщества.`;
    imgStep = 3;
});

fourthStep.addEventListener('click', () => {
    noOn();
    fourthStep.classList.add('on');
    howImg.classList.add('fourth__img');
    howTitle.innerHTML = 'Инспектируем все этапы работ';
    hideHowText_2();
    howText_1.innerHTML = `Высокий уровень вовлечения представителей целевой аудитории является 
    чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит 
    от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель 
    организационной деятельности говорит о возможностях системы массового участия. 
    Принимая во внимание показатели успешности, постоянное информационно-пропагандистское 
    обеспечение нашей деятельности позволяет.`;
    imgStep = 4;
});

let clicked = 0;

const questionOne = document.querySelector('.question__one');
const questionTwo = document.querySelector('.question__two');
const questionThree = document.querySelector('.question__three');
const questionFour = document.querySelector('.question__four');
const questionFive = document.querySelector('.question__five');

const faqOne = document.querySelector('.faq-one');
const faqTwo = document.querySelector('.faq-two');
const faqThree = document.querySelector('.faq-three');
const faqFour = document.querySelector('.faq-four');
const faqFive = document.querySelector('.faq-five');

const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const buttonFive = document.querySelector('.five');

faqOne.addEventListener('click', () => {
    if (clicked == 1) {
        clicked = 0;
        questionOne.style.display = 'none';
        buttonOne.classList.remove('question__click');
    } else {
        clicked = 1;
        questionOne.style.display = 'flex';
        buttonOne.classList.add('question__click');
    }
});

faqTwo.addEventListener('click', () => {
    if (clicked == 2) {
        clicked = 0;
        questionTwo.style.display = 'none';
        buttonTwo.classList.remove('question__click');
    } else {
        clicked = 2;
        questionTwo.style.display = 'flex';
        buttonTwo.classList.add('question__click');
    }
});

faqThree.addEventListener('click', () => {
    if (clicked == 3) {
        clicked = 0;
        questionThree.style.display = 'none';
        buttonThree.classList.remove('question__click');
    } else {
        clicked = 3;
        questionThree.style.display = 'flex';
        buttonThree.classList.add('question__click');
    }
});

faqFour.addEventListener('click', () => {
    if (clicked == 4) {
        clicked = 0;
        questionFour.style.display = 'none';
        buttonFour.classList.remove('question__click');
    } else {
        clicked = 4;
        questionFour.style.display = 'flex';
        buttonFour.classList.add('question__click');
    }
});

faqFive.addEventListener('click', () => {
    if (clicked == 5) {
        clicked = 0;
        questionFive.style.display = 'none';
        buttonFive.classList.remove('question__click');
    } else {
        clicked = 5;
        questionFive.style.display = 'flex';
        buttonFive.classList.add('question__click');
    }
});

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
    autoplay: {
        delay: 3000,
    },
    allowTouchMove: true,
    loop: true,
});

const burgerMenu = document.querySelector('.burger__menu');
const burgerBtn = document.querySelector('.burger__button');
const blackScreen = document.querySelector('.black__screen');
let burgerOn = false;
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
    if (!burgerOn) {
        blackScreen.style.display = 'block';
        burgerMenu.style.display = 'block';
        body.style.overflow = 'hidden';
        burgerOn = true;
        burgerBtn.classList.add('burger__active')
    } else {
        blackScreen.style.display = 'none';
        burgerMenu.style.display = 'none';
        body.style.overflow = 'visible';
        burgerOn = false;
        burgerBtn.classList.remove('burger__active')
    }
});

const noMenu = document.querySelector('.no__menu');
const searchClose = document.querySelector('.search__close');
const search = document.querySelector('.search__menu');

noMenu.addEventListener('click', () => {
    search.style.display = 'flex';
    noMenu.style.display = 'none';
})

searchClose.addEventListener('click', () => {
    search.style.display = 'none';
    noMenu.style.display = 'flex';
})
