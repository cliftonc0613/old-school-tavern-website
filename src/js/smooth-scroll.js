// Native smooth scroll - no library needed
// Lenis was causing IntersectionObserver and ScrollTrigger sync issues
export function initSmoothScroll() {
  // Handle anchor link smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}
