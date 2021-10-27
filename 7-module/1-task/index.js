import createElement from '../../assets/lib/create-element.js';

function createTemplate(menu) {
  return `
  <div class="ribbon">
  <button class="ribbon__arrow ribbon__arrow_left">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>

  <nav class="ribbon__inner">
    ${menu.map(link => {
      return `<a href="#" class="ribbon__item" data-id="${link.id}">${link.name}</a>`
    }).join('')}
  </nav>

  <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>
</div>
  `
}

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.ribbon = createTemplate(this.categories)
    this.elem = createElement(this.ribbon)

    this.ribbonInner = this.elem.querySelector('.ribbon__inner')
    this.arrLeft = this.elem.querySelector('.ribbon__arrow_left')
    this.arrRight = this.elem.querySelector('.ribbon__arrow_right')

    this.arrRight.addEventListener('click', () => {
      this.ribbonInner.scrollBy(350, 0)
    })

    this.arrLeft.addEventListener('click', () => {
      this.ribbonInner.scrollBy(-350, 0)
    })

    this.ribbonInner.addEventListener('scroll', () => {
      if(this.ribbonInner.scrollLeft > 1) {
        this.arrLeft.classList.add('ribbon__arrow_visible')
      } else if (this.ribbonInner.scrollLeft < 1) {
        this.arrLeft.classList.remove('ribbon__arrow_visible')
      }

      let scrollRight = this.ribbonInner.scrollWidth - this.ribbonInner.scrollLeft - this.ribbonInner.clientWidth

      if(scrollRight > 1) {
        this.arrRight.classList.add('ribbon__arrow_visible')
      } else if (scrollRight < 1) {
        this.arrRight.classList.remove('ribbon__arrow_visible')
      }

    })

    this.elem.querySelectorAll('.ribbon__item').forEach(item => {
      item.addEventListener('click', (event) => {
        this.elem.querySelectorAll('.ribbon__item').forEach(item => {
          item.classList.remove('ribbon__item_active')
        })
        event.preventDefault()
        const loc = event.target;
        loc.classList.add('ribbon__item_active')

        const ribbonSelect = new CustomEvent('ribbon-select', {
          detail: loc.dataset.id,
          bubbles: true
        })

        this.elem.dispatchEvent(ribbonSelect)
      })
    })
  }
}
