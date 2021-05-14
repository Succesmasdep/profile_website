// Menu Show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// Active and remove menu

const navLink = document.querySelectorAll('.nav__link')
// active link
const linkAction = (e) => {
    navLink.forEach(n => n.classList.remove('active'))
    // console.log(this)
    // this.classList.add('active')

    // remove mobile menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))