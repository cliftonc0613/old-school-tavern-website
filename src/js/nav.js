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

  // Mobile menu toggle
  hamburger?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open')
    const isOpen = mobileMenu.classList.contains('open')
    document.body.style.overflow = isOpen ? 'hidden' : ''
    nav.style.transform = 'translateY(0)'

    // Animate hamburger to X
    const lines = hamburger.querySelectorAll('span')
    if (isOpen) {
      lines[0].style.transform = 'rotate(45deg) translate(4px, 4px)'
      lines[1].style.opacity = '0'
      lines[2].style.transform = 'rotate(-45deg) translate(4px, -4px)'
    } else {
      lines[0].style.transform = ''
      lines[1].style.opacity = '1'
      lines[2].style.transform = ''
    }
  })

  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open')
      document.body.style.overflow = ''
      const lines = hamburger.querySelectorAll('span')
      lines[0].style.transform = ''
      lines[1].style.opacity = '1'
      lines[2].style.transform = ''
    })
  })
}
