document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('application-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const applicantId = document.getElementById('applicant-id').value;
        const applicantName = document.getElementById('applicant-name').value;
        const companyId = document.getElementById('company-id').value;
        const companyName = document.getElementById('company-name').value;
        const jobId = document.getElementById('job-id').value;
        const jobName = document.getElementById('job-name').value;
        const selfRecommendation = document.getElementById('self-recommendation').value;
        const resumeFile = document.getElementById('resume').files[0];
        const resumeFileName = resumeFile ? resumeFile.name : '';

        const application = {
            applicantId,
            applicantName,
            companyId,
            companyName,
            jobId,
            jobName,
            resumeFileName,
            selfRecommendation
        };

        saveApplication(application);

        // 跳转回 hunt.html 页面
        window.location.href = 'hunt.html';
    });
});

function saveApplication(application) {
    let applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.push(application);
    localStorage.setItem('applications', JSON.stringify(applications));
}

