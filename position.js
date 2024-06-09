document.addEventListener('DOMContentLoaded', () => {
    displayPositions();
});

function displayPositions() {
    const positions = JSON.parse(localStorage.getItem('positions')) || [];
    const tableBody = document.querySelector('#position-table tbody');

    tableBody.innerHTML = '';

    positions.forEach((position, index) => {
        const row = `
            <tr>
                <td>${position.jobId}</td>
                <td>${position.jobName}</td>
                <td>${position.companyId}</td>
                <td>${position.location}</td>
                <td>${position.salary}</td>
                <td>${position.department}</td>
                <td>${position.time}</td>
                <td><button onclick="deleteposition(${index})">Delete</button></td> <!-- 删除按钮 -->
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

function deleteposition(index) {
    let positions = JSON.parse(localStorage.getItem('positions')) || [];
    positions.splice(index, 1);
    localStorage.setItem('positions', JSON.stringify(positions));
    displayPositions();
}

