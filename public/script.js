document.getElementById('enrollmentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
        rollNo: document.getElementById('rollNo').value,
        fullName: document.getElementById('fullName').value,
        class: document.getElementById('class').value,
        birthDate: document.getElementById('birthDate').value,
        address: document.getElementById('address').value,
        enrollmentDate: document.getElementById('enrollmentDate').value,
    };

    const response = await fetch('/save-student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
    document.getElementById('enrollmentForm').reset();
});

document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('enrollmentForm').reset();
});
