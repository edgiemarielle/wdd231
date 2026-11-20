document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const timestamp = document.querySelector('#timestamp');
if (timestamp) {
    timestamp.value = new Date().toISOString();
}