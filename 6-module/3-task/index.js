import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.carouselInner = '';
    this.maxLength = slides.length;
    this.count = 0;

    slides.forEach(slide => {
      this.carouselInner += `
      <div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
      `});

    this.carousel = `
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
        ${this.carouselInner}
      </div>
    </div>
    `
    this.elem = createElement(this.carousel)
    this.transformLength = this.widthCarousel
    this.arrowLeft.style.display = 'none'

    this.arrowRight.addEventListener('click', () => {
      if (this.count == 0) {
        if(this.transformLength == 0) this.transformLength = this.widthCarousel;
        this.innerContainer.style.transform = `translateX(-${this.widthCarousel}px)`
        this.count++
        this.arrowLeft.style.display = '';
      } else {
        this.count++
        this.transformLength += this.widthCarousel;
        this.innerContainer.style.transform = `translateX(-${this.transformLength}px)`
        if (this.count >= this.maxLength -1) {
          this.arrowRight.style.display = 'none'
        }
      }
    })

    this.arrowLeft.addEventListener('click', () => {
      this.count--
      if(this.count < this.maxLength - 1) this.arrowRight.style.display = '';
      if(this.count == 0) this.arrowLeft.style.display = 'none';
      this.transformLength -= this.widthCarousel;
      this.innerContainer.style.transform = `translateX(-${this.transformLength}px)`
    })

    Array.from(this.elem.querySelectorAll('.carousel__button')).forEach(btn => {
      btn.addEventListener('click', (event) => {
        const target = event.target;

        const addProduct = new CustomEvent("product-add", {
          detail: target.closest('div[data-id]').dataset.id,
          bubbles: true
        });

        this.elem.dispatchEvent(addProduct)
      })
    })
  }

  get arrowRight() {
    return this.elem.querySelector('.carousel__arrow_right')
  }
  get arrowLeft() {
    return this.elem.querySelector('.carousel__arrow_left')
  }
  get innerContainer() {
    return this.elem.querySelector('.carousel__inner')
  }

  get widthCarousel() {
    return this.innerContainer.offsetWidth
  }
}
