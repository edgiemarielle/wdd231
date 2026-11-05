const membersList = document.querySelector('#member-list');

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

async function getMemberInfo() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        displayMemberInfo(data.info);
    } catch (error) {
        console.error(error);
    }
}


const displayMemberInfo = (memberInfo) => {
    memberInfo.forEach((info) => {
        const memberList = document.createElement('section');
        const name = document.createElement('h2');
        const companyPhoto = document.createElement('img');
        const companyInfo = document.createElement('div');
        companyInfo.className = 'company-info';
        [
            [`YEAR FOUNDED: ${info.yearFounded}`, `ADDRESS: ${info.address}`, `EMAIL: ${info.email}`, `PHONE NO.: ${info.number}`, `WEBSITE: ${info.url}`]
        ].forEach((detail) => {
            const item = document.createElement('span');
            item.textContent = detail;
            companyInfo.appendChild(item);
        });
        
        name.textContent = `${info.name}`;
        companyPhoto.setAttribute('src', info.image);
        companyPhoto.setAttribute('alt', `Company Photo of ${info.name}`);
        companyPhoto.setAttribute('loading', 'lazy');
        companyPhoto.setAttribute('width', '100');
        companyPhoto.setAttribute('height', '150');
        companyInfo.textContent = [`YEAR FOUNDED: ${info.yearFounded}`, `ADDRESS: ${info.address}`, `EMAIL: ${info.email}`, `PHONE NO.: ${info.number}`, `WEBSITE: ${info.url}`].join('\n');
        
        memberList.appendChild(name);
        memberList.appendChild(companyPhoto);
        memberList.appendChild(companyInfo);

        membersList.appendChild(memberList);
    });
}

gridButton.addEventListener("click", () => {
    membersList.classList.add('grid');
    membersList.classList.remove('list');
});

listButton.addEventListener("click", showList);

function showList() {
    membersList.classList.add('list');
    membersList.classList.remove('grid');
}

membersList.classList.add('grid');
getMemberInfo();