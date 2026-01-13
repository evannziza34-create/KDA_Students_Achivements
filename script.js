document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('themToggle');
    const yearElement = document.getElementById('year')
    if (localStorage.getItem('evotech-theme') === 'dark'){
        body.classList.add('dark');
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            localStorage.setItem('evotech-theme', body.classList.contains('dark') ? 'dark' : 'light');
        })
    }
    if(yearElement){
        yearElement.textContent = new Date().getFullYear();
    }
})