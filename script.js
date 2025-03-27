document.querySelectorAll('.program__section-title').forEach(title => {
  title.addEventListener('click', () => {
    const icon = title.querySelector('.fa-chevron-down')
    const lectures = title.nextElementSibling
    icon.classList.toggle('program__section-icon--rotated')
    lectures.classList.toggle('program__lectures--hidden')
  })
})