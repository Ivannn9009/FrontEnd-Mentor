const hamburger = document.getElementById('hamburger');
const mobilemenu = document.getElementById('mobilemenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    mobilemenu.classList.toggle('show');
});