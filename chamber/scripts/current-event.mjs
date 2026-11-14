const events = [
    {
        title: "Voter Registration",
        img: "https://www.batangascity.gov.ph/web/images/News/2026/November/11/e/01.jpg",
        desc: "Residents have been turning out heavily for the first days of voter registration at the Batangas City Official Website tracking local civic activities."
    },
    {
        title: "Ala E! Festival 2026",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBD3tEG_HMNSyI2X2U_IMPCMQJlobIS9RwM0W4zkiqA&s=10",
        desc: "The official logo and highlights for the upcoming Ala E! Festival 2026 were recently unveiled, showcasing the culture, food, and distinct products of Batangas."
    }
];

const currentEventList = document.querySelector('#current-event');

events.forEach((event) => {
    const card = document.createElement('article');
    const title = document.createElement('h3');
    const img = document.createElement('img');
    const desc = document.createElement('p');
    
    title.textContent = `${event.title}`;
    img.setAttribute('src', event.img);
    img.setAttribute('alt', `${event.title}`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '100');
    img.setAttribute('height', '150');
    desc.textContent = event.desc;

    card.append(title, img, desc);
    currentEventList.append(card);
});
