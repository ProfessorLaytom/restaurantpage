const content = document.createElement('div');
content.id = 'content'
import  makeHome  from './js/home.js';
import makeContact from './js/contact.js';
import makeMenu from './js/menu.js';
import './style.css'


import myImage from './img/cave.jpg'


//loads the new pages according to the button pressed, and
//updates the buttons with the 'current' class when added
const clickHandler = (e) => {
    const buttons = Array.from(document.querySelectorAll('button'))
    buttons.forEach(x => x.classList.remove('current'))
    if (e.target.textContent == 'Home'){
        makeHome(content)
    } else if (e.target.textContent == 'Our menu'){
        makeMenu(content)
    }else if (e.target.textContent == 'Contact us !'){
        makeContact(content)
    }
    e.target.classList.add('current')
    buttons.forEach(x => handleButton(x))
};

//puts an event listener on the menu buttons on which the page 
//hasn't loaded.
const handleButton = (x) => {
    x.removeEventListener('click', clickHandler)
    if (!Array.from(x.classList).includes('current')) {
        x.addEventListener('click', clickHandler)
    }
}

//removes all but the header and footer
const removeContent = () => {
    const header = document.querySelector('.header')
    const footer = document.querySelector('.footer')
    while (content.lastChild !== header){
        content.removeChild(content.lastChild);
    }
}

//makes a section and appends it to the content div
const makeDiv = (title, inside, content) => {
    const div = document.createElement('div')
    div.classList.add('section')
    const h2 = document.createElement('h2')
    h2.textContent = title;
    div.appendChild(h2)
    div.appendChild(inside)
    content.appendChild(div)
}


//initializes the page, creates the header and preloads the 
//home page
const init = (() => { 
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Welcome to the Den';

    const mainImg = new Image();
    mainImg.src = myImage;

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');

    const home = document.createElement('button');
    home.textContent = 'Home';
    home.classList.add('current');

    const menu = document.createElement('button');
    menu.textContent = 'Our menu';

    const contact = document.createElement('button');
    contact.textContent = 'Contact us !';

    const footer = document.createElement('div');
    footer.textContent = 'By Tom Dangleterre';
    footer.classList.add('footer');

    [home, menu,contact].forEach(x => handleButton(x));

    [home,menu,contact].forEach(x => tabs.appendChild(x));

    [mainImg, title, tabs].forEach(x => header.appendChild(x));
    document.body.appendChild(content);

    content.appendChild(header);
    makeHome(content);
    document.body.appendChild(footer);
})()

export {removeContent, makeDiv}