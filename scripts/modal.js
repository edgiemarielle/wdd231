const courseInfo = document.querySelector('#course-info');

function displayCourseInfo(course) {
    courseInfo.innerHTML = `
        <button id="closeModal" aria-label="Close">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>`;
    courseInfo.showModal();

    courseInfo.querySelector('#closeModal').addEventListener('click', () => {
        courseInfo.close();
    });
}

courseInfo.addEventListener('click', (event) => {
    if (event.target === courseInfo) {
        courseInfo.close();
    }
});