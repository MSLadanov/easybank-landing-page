const burger = document.querySelector('.burger-button')
const shadowBox = document.querySelector('.shadow_box')
const mobileMenu = document.querySelector('.mobile_menu')
const burgerActiveClasses = ['rotate-up', 'hiding', 'rotate-down']
const burgersElements = document.querySelectorAll('.burger')

function toggleMobileMenu () {
    shadowBox.classList.toggle('active')
    mobileMenu.classList.toggle('active-menu')
    burgersElements.forEach((element, number) => element.classList.toggle(burgerActiveClasses[number]) )
}

burger.addEventListener('click', () => toggleMobileMenu() )