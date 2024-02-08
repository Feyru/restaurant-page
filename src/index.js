import pageLoad from './initial-page-load';
import contactPageLoad from './contact';
import menuPageLoad from './menu';

import "./style.css";


document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
})

function wipeDOMContents(elementId) {
    var element = document.getElementById(elementId);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
const homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click', () => {
    wipeDOMContents('content');
    pageLoad();
})

const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => {
    wipeDOMContents('content');
    contactPageLoad();
})

const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
    wipeDOMContents('content');
    menuPageLoad();
})


