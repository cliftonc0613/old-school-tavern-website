export function initCursor() {
  // Only on desktop
  if (window.matchMedia('(pointer: coarse)').matches) return

  const cursor = document.createElement('div')
  cursor.classList.add('custom-cursor')
  document.body.appendChild(cursor)

  let mouseX = 0, mouseY = 0
  let cursorX = 0, cursorY = 0

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  function animate() {
    cursorX += (mouseX - cursorX) * 0.15
    cursorY += (mouseY - cursorY) * 0.15
    cursor.style.left = `${cursorX - 10}px`
    cursor.style.top = `${cursorY - 10}px`
    requestAnimationFrame(animate)
  }
  animate()

  // Hover effect on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .cursor-hover, input, select')
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'))
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'))
  })
}
