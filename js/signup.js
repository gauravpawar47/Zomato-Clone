document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".signup-container form");
    const errorMessage = document.getElementById("error-message");

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Hide error message initially
        errorMessage.style.display = 'none';

        // Check email format (basic validation)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(username)) {
            showMessage(" ❌ Invalid email format. Please try again", "error");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            showMessage(" ❌ Passwords do not match. Please try again", "error");
            return;
        }

        // Password length check
        if (password.length < 6) {
            showMessage(" ❌ Password must be at least 6 characters long", "error");
            return;
        }

        // If validation passes, save user credentials (for demo purposes)
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        // Redirect to login page with success message
        if (password === confirmPassword) {
            showMessage(" ✔️ Redirecting to Login", "success");
            
            setTimeout(() => {
                window.location.href = "login.html"; // Redirect after 1 second
            }, 1000);
            return;
        }    
    });

    function showMessage(message, type) {
        const errorMessage = document.getElementById("error-message");
        
        // Set message content
        errorMessage.style.display = "block";
        errorMessage.innerHTML = `<span>${message}</span>`;
    
        // Reset animation by removing and re-adding the animation class
        errorMessage.style.animation = "none"; // Temporarily disable animation
        void errorMessage.offsetWidth; // Trigger a reflow to reset animation
        errorMessage.style.animation = "popUp 0.5s ease-in-out, popDown 0.5s ease-in-out 1.5s";
    
        // Automatically hide after the animation ends
        setTimeout(() => {
            errorMessage.style.display = "none"; // Hide message
        }, 2000); // Total duration (popUp + delay + popDown)
    }
});
