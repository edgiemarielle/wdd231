const myInfo = new URLSearchParams(window.location.search);

const submittedTimestamp = new Date(myInfo.get('timestamp'));
const formattedTimestamp = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short'
}).format(submittedTimestamp);

document.querySelector('#form-info').innerHTML = `
<h1>Thank you for joining us, ${myInfo.get('fname')} ${myInfo.get('lname')}!</h1>
<p class="success">Your membership application was successful!</p>
<p class="info"><strong>Form Information:</strong></p>
<p class="member-info"><strong>Membership Level:</strong> ${myInfo.get('membership')}</p>
<p class="member-info"><strong>Organizational Title:</strong> ${myInfo.get('title')}</p>
<p class="member-info"><strong>Business Name:</strong> ${myInfo.get('orgName')}</p>
<p class="member-info"><strong>Email:</strong> ${myInfo.get('email')}</p>
<p class="member-info"><strong>Phone:</strong> ${myInfo.get('number')}</p>
<p class="date">${formattedTimestamp}</p>
`