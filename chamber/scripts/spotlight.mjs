const spotlight = document.querySelector('#company-spotlight');

async function getSpotlightInfo() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        displaySpotlight(data.info);
    } catch (error) {
        console.error(error);
    }
    
}

function displaySpotlight(members) {
    const membersToDisplay = members
        .filter((member) => member.membershipLevel === 2 || member.membershipLevel === 3)
        .slice(0, 3);
    
    membersToDisplay.forEach((member) => {
        const card = document.createElement('article');
        const name = document.createElement('h3');
        const logo = document.createElement('img');
        const phone = document.createElement('p');
        const address = document.createElement('p');
        const website = document.createElement('a');
        const membershipNumber = document.createElement('p');

        name.textContent = member.name;
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Company Photo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '150');
        phone.textContent = `Phone: ${member.number}`;
        address.textContent = `Address: ${member.address}`;
        website.href = member.url;
        website.textContent = 'Visit website';
        membershipNumber.textContent = `Membership Level: ${member.membershipLevel}`;

        card.append(name, logo, phone, address, website, membershipNumber);
        spotlight.append(card);
    });
}

getSpotlightInfo();