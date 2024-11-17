function goBack() {
  window.history.back();
}

document.querySelectorAll('input[name="gender"]').forEach((radio) => {
  radio.addEventListener("change", (event) => {
    const userPhoto = document.querySelector(".user-photo");
    if (event.target.value === "male") {
      userPhoto.src = "img/Male.png"; // Set correct male image path
    } else if (event.target.value === "female") {
      userPhoto.src = "img/Female.png"; // Set correct male image path
    } else if (event.target.value === "other") {
      userPhoto.src = "img/Other.png"; // Set correct male image path
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const errorMessage = document.getElementById("error-message");
  const profileForm = document.querySelector(".user-form");

  profileForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission

      // Get user input
      const nameInput = document.getElementById("name").value.trim();
      const numberInput = document.getElementById("number").value.trim();
      const genderInputs = document.getElementsByName("gender");

      let selectedGender = null;
      // Find the selected gender
      for (const gender of genderInputs) {
          if (gender.checked) {
              selectedGender = gender.value;
              break;
          }
      }

      // Validation
      if (!nameInput) {
          showMessage("❌ Please enter your name.", "error");
          return;
      }

      const numberPattern = /^[0-9]{10,}$/; // Ensure 10+ digit numbers
      if (!numberPattern.test(numberInput)) {
          showMessage("❌ Please enter a valid 10-digit number.", "error");
          return;
      }

      if (!selectedGender) {
          showMessage("❌ Please select a gender.", "error");
          return;
      }

      // Save validated data to localStorage
      localStorage.setItem("profileName", nameInput);
      localStorage.setItem("profileNumber", numberInput);
      localStorage.setItem("profileGender", selectedGender);

      // Show success message
      showMessage("✔️ Profile saved successfully!", "success");
  });

  function showMessage(message, type) {
      // Set message content
      errorMessage.style.display = "block";
      errorMessage.innerHTML = `<span>${message}</span>`;

      // Reset animation
      errorMessage.style.animation = "none";
      void errorMessage.offsetWidth; // Trigger a reflow
      errorMessage.style.animation =
          "popUp 0.5s ease-in-out, popDown 0.5s ease-in-out 1.5s";

      // Automatically hide message after animation
      setTimeout(() => {
          errorMessage.style.display = "none";
      }, 2000);
  }
});