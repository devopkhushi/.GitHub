document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homeLink');
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const profileLink = document.getElementById('profileLink');
    const logoutLink = document.getElementById('logoutLink');
    const mainContent = document.getElementById('mainContent');

    // Event listeners for navigation links
    homeLink.addEventListener('click', () => loadHomePage());
    loginLink.addEventListener('click', () => loadLoginPage());
    registerLink.addEventListener('click', () => loadRegistrationPage());
    profileLink.addEventListener('click', () => loadProfilePage());
    logoutLink.addEventListener('click', () => logout());

    // Initial page load
    loadHomePage();

    // Functions for loading content
    function loadHomePage() {
        mainContent.innerHTML = `<h2>Welcome to Our Website!</h2>
                                 <p>Explore our products and services.</p>`;
    }

    function loadRegistrationPage() {
        mainContent.innerHTML = `<h2>Register</h2>
                                 <!-- Include registration form here -->`;
    }

    function loadProfilePage() {
        mainContent.innerHTML = `<h2>Profile</h2>
                                 <!-- Include profile details and options here -->`;
    }
    function loadLoginPage() {
        mainContent.innerHTML = `<h2>Login</h2>
                                 <!-- Include login form here -->`;
    }
    

    function logout() {
        // Perform logout actions, such as clearing session data, redirecting to home page, etc.
        alert('Logout successful!');
    }
});
