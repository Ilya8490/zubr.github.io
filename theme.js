// theme.js

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const containerElement = document.querySelector('.container');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Load saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'day';
    if (currentTheme === 'night') {
        enableNightMode();
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', function() {
        if (bodyElement.classList.contains('night-mode')) {
            disableNightMode();
        } else {
            enableNightMode();
        }
    });

    function enableNightMode() {
        bodyElement.classList.add('night-mode');
        containerElement.classList.add('night-mode');
        themeToggleButton.textContent = 'Switch to Day Mode';
        navLinks.forEach(link => link.classList.add('night-mode'));
        localStorage.setItem('theme', 'night');
    }

    function disableNightMode() {
        bodyElement.classList.remove('night-mode');
        containerElement.classList.remove('night-mode');
        themeToggleButton.textContent = 'Switch to Night Mode';
        navLinks.forEach(link => link.classList.remove('night-mode'));
        localStorage.setItem('theme', 'day');
    }
});