const hardcodedUsername = "admin";
const hardcodedPassword = "admin";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === hardcodedUsername && password === hardcodedPassword) {
        // Set session
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("username", username);
        alert("Login successful!");
        window.location.href = "profile.html";
    } else {
        alert("Invalid username or password!");
    }
}

// Check if user is already logged in
window.onload = function() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
        window.location.href = "profile.html";
    }
};
