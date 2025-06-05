let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    nav.classList.toggle('active');
};
