const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

themeToggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Switch to Light Theme';
    } else {
        themeToggleButton.textContent = 'Switch to Dark Theme';
    }
});
