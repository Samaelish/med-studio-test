document.querySelectorAll('.program__section-title').forEach(title => {
  title.addEventListener('click', () => {
    const icon = title.querySelector('.fa-chevron-down')
    const lectures = title.nextElementSibling
    icon.classList.toggle('program__section-icon--rotated')
    lectures.classList.toggle('program__lectures--hidden')
  })
})

// Responsive and accessible Navigation
const openButton = document.getElementById('open-navbar-button')
const navbar = document.querySelector('nav')
const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(
  link => link.addEventListener('click', () => {
    closeNavbar()
  })
)

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
  const isMobile = e.matches
  isMobile ?
    navbar.setAttribute('inert', '') : // Mobile
    navbar.removeAttribute('inert') // not Mobile
}

function openNavbar() {
  navbar.classList.add('show');
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}
function closeNavbar() {
  navbar.classList.remove('show');
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

// click handler to close the navbar when pressing the Esc key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navbar.classList.contains('show')) {
    closeNavbar()
  }
})

updateNavbar(media)