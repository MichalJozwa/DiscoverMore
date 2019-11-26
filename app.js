// NavList

const navSlide = () => {
    const burger = document.querySelector('.icon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=> {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index)=> {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1s ease forwards`
            }
        });
        // Burger Animation
        burger.classList.toggle('icon-active');
    });
}

navSlide();

// Burger

$(document).ready(function() {
    $('.icon').click(function() {
        $('.icon').toggleClass('icon_active');
    })
})

// If menu (on mobile) is active, on click elsewhere than menu content, close menu
