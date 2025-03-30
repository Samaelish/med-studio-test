// Обработчик клика для заголовков секций программы
// Позволяет разворачивать/сворачивать разделы с лекциями
document.querySelectorAll('.program__section-title').forEach(title => {
  title.addEventListener('click', () => {
    // Находим иконку-шеврон и контейнер с лекциями
    const icon = title.querySelector('.fa-chevron-down')
    const lectures = title.nextElementSibling

    // Переключаем классы для анимации иконки и скрытия/показа лекций
    icon.classList.toggle('program__section-icon--rotated')
    lectures.classList.toggle('program__lectures--hidden')
  })
})

// Адаптивное и доступное меню навигации
const openButton = document.getElementById('open-navbar-button') // Кнопка открытия меню
const navbar = document.querySelector('nav') // Контейнер навигации
const navLinks = document.querySelectorAll('nav a') // Все ссылки в меню

// Закрываем меню при клике на любую ссылку (актуально для мобильной версии)
navLinks.forEach(
  link => link.addEventListener('click', () => {
    closeNavbar()
  })
)

// Обработчик изменения размера экрана
const media = window.matchMedia("(width < 700px)") // Медиа-запрос для мобильных устройств

// Следим за изменением размера экрана
media.addEventListener('change', (e) => updateNavbar(e))

// Обновление состояния навигации при изменении размера экрана
function updateNavbar(e) {
  const isMobile = e.matches
  // На мобильных добавляем атрибут inert (блокирует взаимодействие)
  // На десктопах убираем inert для доступности
  isMobile ?
    navbar.setAttribute('inert', '') :
    navbar.removeAttribute('inert')
}

// Открытие меню: добавляем класс видимости, обновляем ARIA-атрибуты
function openNavbar() {
  navbar.classList.add('show');
  openButton.setAttribute('aria-expanded', 'true') // Для скринридеров
  navbar.removeAttribute('inert') // Включаем взаимодействие
}

// Закрытие меню: убираем класс видимости, обновляем ARIA-атрибуты
function closeNavbar() {
  navbar.classList.remove('show');
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '') // Блокируем взаимодействие
}

// Закрытие меню по клавише Escape (для улучшения доступности)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navbar.classList.contains('show')) {
    closeNavbar()
  }
})

// Инициализация начального состояния навигации
updateNavbar(media)