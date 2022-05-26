import { makeDiv, removeContent } from "../index.js";


const makeMenuItem = () => {
    container = document.createElement('div');s
}

//creates the contact tab with phone/pigeon and a map
const makeContact = (content) =>{
    removeContent();
    const contact = document.createElement('div')
    const phone = document.createElement('p')
    const email = document.createElement('p')
    const location = document.createElement('div')

    phone.textContent = 'You can contact us, or make a reservation at 1337-42-1337'
    email.textContent = 'Or send us a pigeon/bottle down the Vezere river !'
    const containerForStyle = document.createElement('div')
    containerForStyle.appendChild(phone)
    containerForStyle.appendChild(email)
    containerForStyle.classList.add('flex-column')

    contact.appendChild(containerForStyle)
    console.log(contact)
    makeDiv('Contact us !', contact, content)
    
    location.innerHTML = '<p>Grotte de Lascaux, 24290 Montignac</p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45097.221731634985!2d1.135895572782933!3d45.05381809900293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ff5466b12efcbd%3A0x72d8dc5bd7213e6f!2sGrotte%20de%20Lascaux!5e0!3m2!1sen!2sfr!4v1653490379296!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    makeDiv('Where to find us', location, content)
}



export default makeContact