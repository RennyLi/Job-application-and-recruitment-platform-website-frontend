document.addEventListener('DOMContentLoaded', () => {
    displayApplications();
});

function displayApplications() {
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    const tableBody = document.querySelector('#application-table tbody');

    tableBody.innerHTML = '';

    applications.forEach((application, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${application.applicantId}</td>
                <td>${application.applicantName}</td>
                <td>${application.companyId}</td>
                <td>${application.companyName}</td>
                <td>${application.jobId}</td>
                <td>${application.jobName}</td>
                <td>${application.resumeFileName}</td>
                <td>${application.selfRecommendation}</td>
                <td><button onclick="deleteApplication(${index})">Delete</button></td> <!-- 删除按钮 -->
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

function deleteApplication(index) {
    let applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.splice(index, 1);
    localStorage.setItem('applications', JSON.stringify(applications));
    displayApplications();
}

