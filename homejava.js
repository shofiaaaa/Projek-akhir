document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.getElementById('navbar');

    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});
