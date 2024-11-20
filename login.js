const validUsername = "user@gmail.com";
        const validPassword = "user123";
        const adminUsername = "admin@gmail.com";
        const adminPassword = "admin123";
        const validCaptcha = "6rbmc2";

        function validateLogin(event) {
            event.preventDefault();

            const username = document.getElementById("mobile").value;
            const password = document.getElementById("password").value;
            const captcha = document.getElementById("captcha").value;

            if (username === "" || password === "" || captcha === "") {
                alert("All fields are required!");
                return;
            }

            if (username === adminUsername && password === adminPassword) {
                window.location.href = "admin.html";
                return;
            }

            if (username === validUsername && password === validPassword) {
                window.location.href = "card.html"; 
                return;
            }

            alert("Invalid username or password!");
        }

        document.getElementById('showPassword').addEventListener('change', function () {
            const passwordInput = document.getElementById('password');
            passwordInput.setAttribute('type', this.checked ? 'text' : 'password');
        });