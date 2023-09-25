hamburger = document.querySelector(".hamburger");
mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})