document.addEventListener("DOMContentLoaded", function () {
  // Simple loading animation for the main text and input box
  const mainText = document.querySelector("main p");
  const searchInput = document.querySelector('main input[type="text"]');

  // Pop in effect on load
  setTimeout(() => {
    mainText.style.opacity = 1;
    mainText.style.transform = "translateY(0)";
  }, 500);

  setTimeout(() => {
    searchInput.style.opacity = 1;
    searchInput.style.transform = "scale(1)";
  }, 1000);

  // Hover effect on input focus
  searchInput.addEventListener("focus", () => {
    searchInput.style.borderColor = "#d32f2f";
  });

  searchInput.addEventListener("blur", () => {
    searchInput.style.borderColor = "#ddd";
  });

  // Fetch the user's location when the page loads
  fetchUserLocation();
});

// Get the modal and the button
const signUpBtn = document.getElementById("signUpBtn");
const signUpModal = document.getElementById("signUpModal");

// Show the modal when the sign-up button is clicked
signUpBtn.onclick = function () {
  signUpModal.style.display = "block";
};

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target === signUpModal) {
    signUpModal.style.display = "none";
  }
};

// Fetch the user's location and update the <p> tag
document.addEventListener("DOMContentLoaded", () => {
  // DOM elements for navigation links
  const loginLink = document.getElementById("loginLink");
  const signUpBtn = document.getElementById("signUpBtn");

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    // User is logged in: Update 'login' to 'profile' and 'signup' to 'logout'
    if (loginLink) {
      loginLink.textContent = "Profile"; // Change 'Login' to 'Profile'
      loginLink.href = "profile.html"; // Redirect to profile.html
    }

    if (signUpBtn) {
      signUpBtn.textContent = "Logout"; // Change 'SignUp' to 'Logout'
      signUpBtn.href = "#"; // Prevent navigation for logout
      signUpBtn.addEventListener("click", () => {
        // Handle logout
        localStorage.removeItem("isLoggedIn"); // Clear login status
        window.location.href = "index.html"; // Redirect to home page
      });
    }
  } else {
    // User is not logged in: Ensure 'login' and 'signup' default functionality
    if (loginLink) {
      loginLink.textContent = "Log In";
      loginLink.href = "login.html"; // Redirect to login.html
    }

    if (signUpBtn) {
      signUpBtn.textContent = "Sign Up";
      signUpBtn.href = "signup.html"; // Redirect to signup.html
    }
  }
});
