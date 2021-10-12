import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = `
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
      `
    this.elem = createElement(this.modal)

    this.elem.querySelector('.modal__close').addEventListener('click', () => {
      this.close()
    }, {once: true})

    document.querySelector('body').addEventListener('keydown', (event) => {
      if(event.code === 'Escape') {
        this.close()
      }
    }, {once: true})

  }

  open() {
    const body = document.querySelector('body')
    body.classList.add('is-modal-open')
    body.append(this.elem)
  }

  setTitle(title) {
    return this.elem.querySelector('.modal__title').innerHTML = title
  }

  setBody(nodeB) {
    return this.elem.querySelector('.modal__body').append(nodeB)
  }

  close() {
    this.elem.remove()
    document.querySelector('body').classList.remove('is-modal-open')
  }
}
