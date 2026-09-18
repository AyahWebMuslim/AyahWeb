const checkbox = document.getElementById('check');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});