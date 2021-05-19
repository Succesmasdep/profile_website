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


// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: '2000',
    reset: true
})

// Scroll Home
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { intervel: 200 })

// scroll about
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 200 })

// scroll skills
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', { delay: 200 })
sr.reveal('.skills__img', { delay: 200 })
sr.reveal('.skills__data', { intervel: 200 })

// scroll work
sr.reveal('.work__img', { delay: 200 })

// scroll contact
sr.reveal('.contact__input', { delay: 200 })


document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.setAttribute("data-theme", "light");
    const themeSwitcher = document.getElementById("theme-switcher");

    themeSwitcher.onclick = () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const isLightMode = currentTheme === "light"
        // console.log(isLightMode);
        if (isLightMode) {
            themeSwitcher.classList.add('active');
        } else {
            themeSwitcher.classList.remove('active');
        }

        const switchToTheme = isLightMode ? "dark" : "light"
        document.documentElement.setAttribute("data-theme", switchToTheme);
    }
});