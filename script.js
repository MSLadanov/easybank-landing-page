const burger = document.querySelector('.burger-button')
const shadowBox = document.querySelector('.shadow_box')
const mobileMenu = document.querySelector('.mobile_menu')

function toggleMobileMenu () {
    shadowBox.classList.toggle('active')
    mobileMenu.classList.toggle('active-menu')
}

burger.addEventListener('click', () => toggleMobileMenu() )