document.addEventListener('DOMContentLoaded', () => {
    displayPortfolios();
});

function displayPortfolios() {
    const portfolios = JSON.parse(localStorage.getItem('portfolios')) || [];
    const tableBody = document.querySelector('#portfolio-table tbody');

    tableBody.innerHTML = '';

    portfolios.forEach((portfolio, index) => {
        const rows = `
            <tr>
                <td><strong>Name:</strong><br>${portfolio.name}</td>
            </tr>
            <tr>
                <td><strong>Email:</strong><br>${portfolio.email}</td>
            </tr>
            <tr>
                <td><strong>Address:</strong><br>${portfolio.address}</td>
            </tr>
            <tr>
                <td><strong>Prize:</strong><br>${portfolio.prize}</td>
            </tr>
            <tr>
                <td><strong>Experience:</strong><br>${portfolio.experience}</td>
            </tr>
            <tr>
                <td><strong>Zip code:</strong><br>${portfolio.zipcode}</td>
            </tr>
            <tr>
                <td><strong>Self Recommendation:</strong><br>${portfolio.selfRecommendation}</td>
            </tr>
            <tr>
                <td><strong>Resume PDF:</strong><br>${portfolio.resumeFileName}</td>
            </tr>
            <tr>
                <td><button onclick="deletePortfolio(${index})">Delete</button></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', rows);
    });
}

function deletePortfolio(index) {
    let portfolios = JSON.parse(localStorage.getItem('portfolios')) || [];
    portfolios.splice(index, 1);
    localStorage.setItem('portfolios', JSON.stringify(portfolios));
    displayPortfolios();
}
