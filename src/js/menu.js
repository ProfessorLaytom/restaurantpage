import { makeDiv, removeContent } from "../index.js"
import Leaves from '../img/leaves.jpg';
import Mud from '../img/mud.jpg';
import Mushroom from '../img/mushroom.jpg';
import RottenFruit from '../img/rottenFruit.jpg';
import Sticks from '../img/sticks.jpg';
import Stones from '../img/stones.jpg';
import Water from '../img/water.jpg';


//generates an array of divs with the item description and image
const generateImgContent = () => {
    const [leaves, mud, mushroom, rottenFruit, sticks, stones, water] = [0,0,0,0,0,0,0].map(x => new Image()); //im lazy
    const imgArray = [leaves, mud, mushroom, sticks, stones, water, rottenFruit]
    const srcArray = [Leaves, Mud, Mushroom, Sticks, Stones, Water, RottenFruit]
    for (let k = 0; k<imgArray.length; k++){
        imgArray[k].src =  srcArray[k]
        const imgDiv = document.createElement('div')
        imgDiv.appendChild(imgArray[k])
        imgArray[k] = imgDiv
        imgArray[k].insertBefore(document.createElement('p'),imgArray[k].firstChild)
    }
    imgArray[0].firstChild.textContent = 'The all-time classic : a bunch of dirty leaves, the all mighty ancestor of salad'
    imgArray[1].firstChild.textContent = 'Craving for a nice desert ? We got you with this thick and filling mud creme coming straight from our own reservoir !'
    imgArray[2].firstChild.textContent = 'Enjoy nature at it\'s freshest with this assortment of hand-picked mushrooms we found in our cave !'
    imgArray[3].firstChild.textContent = 'If you want the crunchy stuff, we can also serve a bunch of sticks, origin depending on season !'
    imgArray[4].firstChild.textContent = 'Probably our heaviest meal, for the ones who dare to eat this much, our famous Pile Of Rocks ! If you finish it you get a free drink !'
    imgArray[5].firstChild.textContent = 'For hydration purposes, we propose the authentic and locally-harvested pond water!'
    imgArray[6].firstChild.textContent = 'Are you of drinking age ? If you dare, take a journey through time with our homebrew Banana moonshine !'
    return imgArray
}

const makeSectionTitle = (title) => {
    const div = document.createElement('div') 
    div.classList.add('section-title')
    const h1 = document.createElement('h1')
    h1.textContent = title
    div.appendChild(h1)
    return div
}

const makeMenu = (content) =>{
    removeContent()
    const imgArray = generateImgContent()
    const starter = makeSectionTitle('Our starters')
    const mainCourse = makeSectionTitle('Our main courses')
    const deserts = makeSectionTitle('Our deserts')
    const drinks = makeSectionTitle('A drink ?')
    console.log(imgArray)
    content.appendChild(starter)
    makeDiv('Bunch\'o leaves', imgArray[0], content)
    makeDiv('Bunch\'o sticks', imgArray[3], content)

    content.appendChild(mainCourse)
    makeDiv('Bunch\'o mushroom', imgArray[2], content)
    makeDiv('Bunc\'o rocks', imgArray[4], content)

    content.appendChild(deserts)
    makeDiv('Bunch\'o mud', imgArray[1], content)

    content.appendChild(drinks)
    makeDiv('Fresh pond water', imgArray[5], content)
    makeDiv('Banana Moonshine', imgArray[6], content)
}



export default makeMenu