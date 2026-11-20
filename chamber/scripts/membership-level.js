const levels = [
    {
        membership: 'Non Profit Membership',
        benefit: ['Basic business profile with contact details', 'Entry to monthly mixers, coffee mornings, and general member meetings.', 'Ability to post community events and fundraisers on the Chambers public calendar.','Access to exclusive deals offered by fellow Chamber members'],
        cost: 'FREE'
    },
    {
        membership: 'Bronze Membership',
        benefit: ['Includes all Non Profit benefits, and', 'Official Chamber ribbon-cutting event and social media announcement for new businesses or anniversaries', 'One-time feature in the monthly Chamber newsletter and social media channels.', 'Official "Proud Member" decal for your storefront and badge for your website.', 'Free or discounted admission to business development seminars and webinars.'],
        cost: '$10 annual'
    },
    {
        membership: 'Silver Membership',
        benefit: ['Includes all Bronze benefits, and', '• Priority placement in search results, business logo display, and expanded description.', 'Reduced pricing on major annual galas, luncheons, and local Bowl Games.', 'Unlimited job listings on the Chambers career portal.', 'Access to select VIP receptions and networking roundtables.'],
        cost: '$20 annual'
    },
    {
        membership: 'Gold Membership',
        benefit: ['Includes all Silver benefits, and', 'Prominent rotating banner or featured placement directly on the Chambers website home page.', 'Guaranteed spot to ride on the Chamber float', 'Commemorative membership plaque featuring official municipal/mayor recognition.', 'All-Access VIP Invitations'],
        cost: '$30 annual'
    }
]

function displayMembershipLevel(level, dialog) {
    dialog.innerHTML =
        `<button class="closeModal" aria-label="Close">X</button>
        <h2>${level.membership}</h2>
        <h3><strong>Benefits include: </strong></h3>
        <ul>${level.benefit.map((benefit) => `<li> ${benefit}</li>`).join('')}</ul>
        <h3><strong>Cost:</strong> ${level.cost}</h3>`;
    dialog.showModal();

    dialog.querySelector('.closeModal').addEventListener('click', () => {
        dialog.close();
    });
}

document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });
});

document.querySelector('#non-profit').addEventListener('click', (event) => {
    event.preventDefault();
    displayMembershipLevel(levels[0], document.querySelector('#np-dialog'));
});

document.querySelector('#bronze').addEventListener('click', (event) => {
    event.preventDefault();
    displayMembershipLevel(levels[1], document.querySelector('#b-dialog'));
});

document.querySelector('#silver').addEventListener('click', (event) => {
    event.preventDefault();
    displayMembershipLevel(levels[2], document.querySelector('#s-dialog'));
});

document.querySelector('#gold').addEventListener('click', (event) => {
    event.preventDefault();
    displayMembershipLevel(levels[3], document.querySelector('#g-dialog'));
});