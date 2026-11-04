const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch("https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json");
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
    
        const data = await response.json();
        // console.table(data.prophets);
        displayProphets(data.prophets);
    } catch (error) {
        console.error(error);
    }
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const birthInfo = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthInfo.innerHTML = `Date of Birth: ${prophet.birthdate}<br>
        Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '230');
        portrait.setAttribute('height', '300');

        card.appendChild(fullName);
        card.appendChild(birthInfo);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}