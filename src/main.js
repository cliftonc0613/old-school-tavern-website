import './styles/main.css'
import { initNav } from './js/nav.js'
import { initCursor } from './js/cursor.js'
import { initAnimations, initLoader, initPageTransitions } from './js/animations.js'
import { initSmoothScroll } from './js/smooth-scroll.js'
import { initGallery } from './js/gallery.js'

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll()
  initNav()
  initLoader()
  initPageTransitions()
  initGallery()

  document.addEventListener('loaderComplete', () => {
    initAnimations()
    initCursor()
  })

  // Fallback if no loader on sub-pages
  if (!document.querySelector('.loader')) {
    setTimeout(() => {
      initAnimations()
      initCursor()
    }, 100)
  }
})
