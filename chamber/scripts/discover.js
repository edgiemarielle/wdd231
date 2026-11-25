import {interests} from "../data/interests.mjs"
console.log(interests);

const showHere = document.querySelector("#attractions")

function displayAttractions(interests) {
    interests.forEach(x => {
        const card = document.createElement('div')

        const photo = document.createElement('img')
        photo.src = `images/${x.photo_url}`
        photo.alt = x.name
        card.appendChild(photo)

        const title = document.createElement('h2')
        title.innerText = x.name
        card.appendChild(title)

        const address = document.createElement('address')
        address.innerText = x.address
        card.appendChild(address)

        const desc = document.createElement('p')
        desc.innerText = x.description
        card.appendChild(desc)

        const learn = document.createElement('button')
        learn.innerText = "Learn More"
        card.appendChild(learn)
        
        showHere.appendChild(card)
    });
}

const visit = document.querySelector("#visit");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (lastVisit === null) {
    visit.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - Number(lastVisit)) / 86_400_000);
    visit.textContent = days < 1
        ? "Back so soon! Awesome!"
        : `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`
}

localStorage.setItem("lastVisit", String(now));


displayAttractions(interests)