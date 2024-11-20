document.addEventListener('DOMContentLoaded', function() {
    const votersTableBody = document.querySelector('#votersTable tbody');
    const voters = JSON.parse(localStorage.getItem('voters')) || [];

    function renderVoters(voters) {
        votersTableBody.innerHTML = '';

        if (voters.length === 0) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 6;
            cell.textContent = 'No registered voters found.';
            row.appendChild(cell);
            votersTableBody.appendChild(row);
            return;
        }

        voters.forEach((voter, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${voter.name}</td>
                <td>${voter.email}</td>
                <td>${voter.phone}</td>
                <td>${voter.address}</td>
                <td>${voter.dob}</td>
                <td><button class="removeVoter" data-index="${index}">Remove</button></td>
            `;
            votersTableBody.appendChild(row);
        });

        document.querySelectorAll('.removeVoter').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.dataset.index;
                removeVoter(index);
            });
        });
    }

    function removeVoter(index) {
        if (confirm("Are you sure you want to remove this voter?")) {
            voters.splice(index, 1);
            localStorage.setItem('voters', JSON.stringify(voters));
            renderVoters(voters);
        }
    }

    renderVoters(voters);


    document.getElementById('clearData').addEventListener('click', function() {
        if (confirm("Are you sure you want to clear all registered voters?")) {
            localStorage.removeItem('voters');
            renderVoters([]);
        }
    });
});