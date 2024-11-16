document.addEventListener("DOMContentLoaded", () => {
    const errorMessage = document.getElementById("error-message");
    const loginForm = document.querySelector(".login-container form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get user input
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        // Fetch stored credentials from localStorage
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        // Validation
        if (storedUsername === usernameInput && storedPassword === passwordInput) {
            // Save login status
            localStorage.setItem("isLoggedIn", "true");

            // Show success message
            showMessage("✔️ Login successful!", "success");

            setTimeout(() => {
                window.location.href = "index.html"; // Redirect after 1 second
            }, 1000);
        } else {
            // Show error message
            showMessage("❌ Invalid username or password. Please try again.", "error");
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

document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordCard = document.getElementById("forgotPasswordCard");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const closeForgotPassword = document.getElementById("closeForgotPassword");
    const errorMessage = document.getElementById("error-message");

    // Show the forgot password card when clicking "Forgot Password?"
    document.querySelector(".extra-links a:nth-child(2)").addEventListener("click", () => {
        forgotPasswordCard.style.display = "block";
    });

    // Close the forgot password card
    closeForgotPassword.addEventListener("click", () => {
        forgotPasswordCard.style.display = "none";
    });

    // Handle password reset form submission
    forgotPasswordForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = document.getElementById("resetEmail").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmNewPassword = document.getElementById("confirmNewPassword").value;

        const storedEmail = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        // Validate email and passwords
        if (emailInput !== storedEmail) {
            showMessage("❌ Email not found. Please check and try again.", "error");
            return;
        }

        if (newPassword === storedPassword) {
            showMessage("❌ New password cannot be the same as the old password.", "error");
            return;
        }

        if (newPassword !== confirmNewPassword) {
            showMessage("❌ Passwords do not match. Please try again.", "error");
            return;
        }

        // Update password in localStorage
        localStorage.setItem("password", newPassword);
        showMessage("✔️ Password reset successful!", "success");

        setTimeout(() => {
            forgotPasswordCard.style.display = "none"; // Hide the card after success
        }, 1500);
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


