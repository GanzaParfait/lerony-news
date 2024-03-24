const showNavBtn = document.querySelector('.showNavBtn');
const Navbar = document.querySelector('.nav-mobile');

showNavBtn.addEventListener('click', () => {
    Navbar.classList.toggle('nav-active');
});
