document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('position-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const jobId = document.getElementById('job-id').value;
        const jobName = document.getElementById('job-name').value;
        const companyId = document.getElementById('company-id').value;
        const location = document.getElementById('location').value;
        const salary = document.getElementById('salary').value;
        const department = document.getElementById('department').value;
        const time = document.getElementById('time').value;

        const position = {
            jobId,
            jobName,
            companyId,
            location,
            salary,
            department,
            time
        };

        saveposition(position);

        // 跳转回 hunt.html 页面
        window.location.href = 'position.html';
    });
});

function saveposition(position) {
    let positions = JSON.parse(localStorage.getItem('positions')) || [];
    positions.push(position);
    localStorage.setItem('positions', JSON.stringify(positions));
}

