document.addEventListener('DOMContentLoaded', () => {
    const dashboardLink = document.getElementById('dashboardLink');
    const productsLink = document.getElementById('productsLink');
    const ordersLink = document.getElementById('ordersLink');
    const mainContent = document.getElementById('mainContent');
    const logoutBtn = document.getElementById('logoutBtn');

    // Event listeners for navigation links
    dashboardLink.addEventListener('click', () => loadDashboard());
    productsLink.addEventListener('click', () => loadProducts());
    ordersLink.addEventListener('click', () => loadOrders());
    logoutBtn.addEventListener('click', () => logout());

    // Initial page load
    loadDashboard();

    // Functions for loading content
    function loadDashboard() {
        mainContent.innerHTML = `<h2>Dashboard</h2>
                                 <!-- Include sales analytics here -->`;
    }

    function loadProducts() {
        mainContent.innerHTML = `<h2>Products</h2>
                                 <!-- Include product management forms and details here -->`;
    }

    function loadOrders() {
        mainContent.innerHTML = `<h2>Orders</h2>
                                 <!-- Include order details here -->`;
    }

    function logout() {
        // Perform logout actions, such as clearing session data, redirecting to login page, etc.
        alert('Logout successful!');
    }
});
