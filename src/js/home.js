import { makeDiv, removeContent } from "../index.js"

const makeHours = () => {
    const hourList = document.createElement('ul')
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    days.forEach(x => {
        if (['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(x)) {
            const li = document.createElement('li');
            li.textContent = `${x}: 11am-2pm, 6pm-11pm`
            hourList.appendChild(li)
        } else {
            const li = document.createElement('li');
            li.textContent = `${x}: Closed for food-harvesting`
            hourList.appendChild(li)
        }
    })
    return hourList
}

const makeHome = (content) => {
    removeContent()

    const container = document.createElement('div')
    const intro = document.createElement('div')
    const location = document.createElement('div')
    const hours = document.createElement('div')

    intro.textContent = 'Welcome to the Cave ! We welcome you in our neanderthal-themed restaurant ! We serve authentic dishes from the Pleistocene epoch, suiting every taste.'

    makeDiv('About us', intro, content)

    const hourList = makeHours()
    makeDiv('Opening hours', hourList, content)
    
    location.innerHTML = '<p>Grotte de Lascaux, 24290 Montignac</p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45097.221731634985!2d1.135895572782933!3d45.05381809900293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ff5466b12efcbd%3A0x72d8dc5bd7213e6f!2sGrotte%20de%20Lascaux!5e0!3m2!1sen!2sfr!4v1653490379296!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    makeDiv('Where to find us', location, content)
}

export default makeHome