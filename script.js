// Select form and inputs
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

// Add event listener for form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from refreshing the page

  // Check if username or password is empty
  if (username.value.trim() === "" || password.value.trim() === "") {
    errorMessage.textContent = "Both fields are required!";
    return;
  }

  // Mock login success
  if (username.value === "admin" && password.value === "password") {
    alert("Login successful!");
    errorMessage.textContent = ""; // Clear error
    loginForm.reset(); // Reset form
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});
