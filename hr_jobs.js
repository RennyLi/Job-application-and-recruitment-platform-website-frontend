// 展开/收起职位详情
function toggleJobDetails(btn) {
    const card = btn.parentNode;
    const expandBtn = btn;
    
    if (card.classList.contains('expanded')) {
        // 如果卡片已展开，则收起并更新按钮文本
        card.classList.remove('expanded');
        expandBtn.textContent = 'Expand';
    } else {
        // 如果卡片未展开，则展开并更新按钮文本
        card.classList.add('expanded');
        expandBtn.textContent = 'Collapse';
    }
}

// 获取搜索框和所有职位卡片
const searchInput = document.querySelector('.srch');
const jobCards = document.querySelectorAll('.job-card');

// 为搜索框添加输入事件监听器
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim().toLowerCase(); // 获取搜索关键字并转换为小写

    // 循环遍历每个职位卡片
    jobCards.forEach(card => {
        // 获取每个卡片中的文本内容
        const cardText = card.textContent.toLowerCase();

        // 如果卡片文本内容包含搜索关键字，则显示该卡片，否则隐藏
        if (cardText.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
