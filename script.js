const navbarLinks = document.querySelector('.navbar-links');
const navbarBtn = document.querySelector('.navbar-btn');

navbarBtn.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
	navbarBtn.classList.toggle('toggled');
});