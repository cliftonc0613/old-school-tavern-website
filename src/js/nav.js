export function initNav() {
  const nav = document.querySelector('#main-nav')
  const hamburger = document.querySelector('#hamburger')
  const mobileMenu = document.querySelector('#mobile-menu')
  const mobileLinks = mobileMenu?.querySelectorAll('a')

  // Scroll-based nav background
  let lastScroll = 0
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    if (currentScroll > 80) {
      nav.classList.add('bg-surface/95', 'backdrop-blur-xl')
      nav.classList.remove('bg-transparent')
    } else {
      nav.classList.remove('bg-surface/95', 'backdrop-blur-xl')
      nav.classList.add('bg-transparent')
    }

    // Hide/show nav on scroll (skip when mobile menu is open)
    if (!mobileMenu?.classList.contains('open')) {
      if (currentScroll > lastScroll && currentScroll > 400) {
        nav.style.transform = 'translateY(-100%)'
      } else {
        nav.style.transform = 'translateY(0)'
      }
    }
    lastScroll = currentScroll
  })

  // Toggle hamburger/X icons
  function toggleIcon(isOpen) {
    hamburger.querySelector('.hamburger-icon').classList.toggle('hidden', isOpen)
    hamburger.querySelector('.close-icon').classList.toggle('hidden', !isOpen)
  }

  // Mobile menu toggle
  hamburger?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open')
    const isOpen = mobileMenu.classList.contains('open')
    document.body.style.overflow = isOpen ? 'hidden' : ''
    nav.style.transform = 'translateY(0)'
    toggleIcon(isOpen)
  })

  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open')
      document.body.style.overflow = ''
      toggleIcon(false)
    })
  })
}
