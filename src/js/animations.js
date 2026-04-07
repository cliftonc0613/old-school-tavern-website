import { gsap } from 'gsap'

export function initAnimations() {
  // Simple CSS-based fade-in on scroll using IntersectionObserver
  // No GSAP scroll dependency - pure vanilla observer for reliability
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.05 })

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach(el => {
    observer.observe(el)
  })

  // Text split animation for hero titles (immediate, no scroll needed)
  gsap.utils.toArray('.char-animate').forEach(el => {
    const text = el.textContent
    el.innerHTML = text.split('').map(char =>
      char === ' ' ? '&nbsp;' : `<span class="inline-block">${char}</span>`
    ).join('')

    gsap.from(el.querySelectorAll('span'), {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.02,
      ease: 'power3.out',
      delay: 0.2,
    })
  })

  // Magnetic buttons (desktop only)
  if (!window.matchMedia('(pointer: coarse)').matches) {
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: 'power2.out' })
      })
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
      })
    })
  }
}

export function initLoader() {
  const loader = document.querySelector('.loader')
  if (!loader) return

  const fill = loader.querySelector('.loader-bar-fill')
  const tl = gsap.timeline()

  tl.to(fill, { width: '100%', duration: 1, ease: 'power2.inOut' })
    .to(loader, {
      yPercent: -100,
      duration: 0.6,
      ease: 'power4.inOut',
      onComplete: () => {
        loader.remove()
        document.dispatchEvent(new Event('loaderComplete'))
      }
    })
}

export function initPageTransitions() {
  const overlay = document.querySelector('.page-transition')
  if (!overlay) return

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href')
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('http')) return

    link.addEventListener('click', (e) => {
      e.preventDefault()
      gsap.to(overlay, {
        scaleY: 1,
        duration: 0.4,
        ease: 'power4.inOut',
        onComplete: () => {
          window.location.href = href
        }
      })
    })
  })
}
