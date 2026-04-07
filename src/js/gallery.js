import PhotoSwipeLightbox from 'photoswipe/lightbox'
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css'

export function initGallery() {
  const gallery = document.querySelector('#gallery--ost')

  if (!gallery) return

  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery--ost',
    children: 'a',
    pswpModule: PhotoSwipe,
    bgOpacity: 0.95,
    padding: { top: 20, bottom: 20, left: 20, right: 20 },
    showHideAnimationType: 'fade',
    loop: true,
  })

  // Add navigation arrows
  lightbox.on('uiRegister', function({ pswp }) {
    pswp.ui.registerElement({
      name: 'arrow',
      order: 10,
      onInit: (el) => {
        const prevBtn = document.createElement('button')
        prevBtn.className = 'pswp__button pswp__button--arrow--left'
        prevBtn.setAttribute('aria-label', 'Previous')
        prevBtn.innerHTML = '<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><path d="M10 16l10-10v20z"/></svg>'
        prevBtn.onclick = () => pswp.prev()

        const nextBtn = document.createElement('button')
        nextBtn.className = 'pswp__button pswp__button--arrow--right'
        nextBtn.setAttribute('aria-label', 'Next')
        nextBtn.innerHTML = '<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><path d="M22 16L12 6v20z"/></svg>'
        nextBtn.onclick = () => pswp.next()

        el.appendChild(prevBtn)
        el.appendChild(nextBtn)
      },
    })
  })

  lightbox.init()
}
