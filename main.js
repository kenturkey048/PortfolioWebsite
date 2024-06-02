
const ELE = document.documentElement;
const mobileNav = document.getElementById('mobile-nav');
const mobileNavItems = document.querySelector('#mobile-nav li');
const menuBar = document.getElementById('menubar');
const backDrop = document.getElementById('backdrop');
const menuBarIcon = document.querySelector('#menubar i')

const options = [menuBar, backDrop, mobileNavItems];

// Theme Switch
document.querySelectorAll('.theme-switch').forEach((item) => {
    item.addEventListener('click', () => {
        ELE.classList.toggle('dark');
        ELE.classList.contains('dark') ? localStorage.setItem('theme', 'light'):localStorage.setItem('theme', 'dark')
    })
})

options.forEach((item)=> {
    item.addEventListener('click', () => {
        mobileNav.classList.toggle('h-0');
        mobileNav.classList.toggle('h-96');
        menuBarIcon.classList.toggle('fa-bars');
        menuBarIcon.classList.toggle('fa-xmark');
        backDrop.classList.toggle('hidden')
    });
});
