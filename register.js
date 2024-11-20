document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;

    if (!name || !email || !phone || !address || !dob) {
        alert("Please fill all fields.");
        return;
    }

    let voters = JSON.parse(localStorage.getItem('voters')) || [];
    voters.push({ name, email, phone, address, dob });

    localStorage.setItem('voters', JSON.stringify(voters));

    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = "Registration successful! Thank you for registering.";
    confirmationMessage.classList.remove('hidden');

    document.getElementById('registrationForm').reset();
});