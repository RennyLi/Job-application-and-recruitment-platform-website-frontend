function toggleJobDetails(btn) {
    const card = btn.parentNode;
    const expandBtn = btn;
    if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        expandBtn.textContent = 'Expand';
    } else {
        card.classList.add('expanded');
        expandBtn.textContent = 'Collapse';
    }
}

const searchInput = document.querySelector('.srch');
const jobCards = document.querySelectorAll('.job-card');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim().toLowerCase(); 

    jobCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
