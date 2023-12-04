const burger = document.querySelector('.burger-button')
const shadowBox = document.querySelector('.shadow_box')

function toggleMobileMenu () {
    shadowBox.classList.toggle('active')
}

burger.addEventListener('click', () => toggleMobileMenu() )