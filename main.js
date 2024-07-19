
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


function sendToWhatsapp(){
    let number = +2348061376410

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('messaage').value;

    var url  = "https://wa.me" + number + "?text="

    + "Name:" +name+ "%0a"
    + "Email:" +email+ "%0a"
    + "Message:" +message+ "%0a%0a"

    window.open(url, '_blank').focus();
}
