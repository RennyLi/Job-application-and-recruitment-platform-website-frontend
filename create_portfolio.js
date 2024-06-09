document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('portfolio-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const applicantId = document.getElementById('applicant-id').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const prize = document.getElementById('prize').value;
        const experience = document.getElementById('experience').value;
        const zipcode = document.getElementById('zipcode').value;
        const selfRecommendation = document.getElementById('self-recommendation').value;


        // 获取上传的简历文件
        const resumeFile = document.getElementById('resume').files[0];
        const resumeFileName = resumeFile ? resumeFile.name : '';

        const portfolio = {
            applicantId,
            name,
            email,
            address,
            prize,
            experience,
            zipcode,
            resumeFileName,
            selfRecommendation
        };

        savePortfolio(portfolio);

        // 跳转回 hunt.html 页面
        window.location.href = 'portfolio.html';
    });
});

function savePortfolio(portfolio) {
    let portfolios = JSON.parse(localStorage.getItem('portfolios')) || [];
    portfolios.push(portfolio);
    localStorage.setItem('portfolios', JSON.stringify(portfolios));
}

