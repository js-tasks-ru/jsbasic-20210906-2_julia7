import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.segments = steps - 1
    this.template = `
    <div class="slider">
      <div class="slider__thumb">
        <span class="slider__value">${value}</span>
      </div>
      <div class="slider__progress"></div>
      <div class="slider__steps">
        <span class="slider__step-active"></span>
      </div>
    </div>
    `
    this.elem = createElement(this.template)
    this.stepsSlider = this.elem.querySelector('.slider__steps')
    this.sliderThumb = this.elem.querySelector('.slider__thumb')
    this.sliderProgress = this.elem.querySelector('.slider__progress')

    for(let i = 1; i < steps; i++) {
      this.stepsSlider.innerHTML += '<span></span>'
    }
    this.stepSlider = this.stepsSlider.querySelectorAll('span')

    this.elem.addEventListener('click', (event) => {
      this.clickSlider(event)
    })
  }

  clickSlider(event) {
    this.stepSlider.forEach(step => {
      step.classList.remove('slider__step-active')
    })
    let locationClick = Math.round(((event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth) * this.segments);
    this.elem.querySelector('.slider__value').innerHTML = locationClick
    this.stepSlider[locationClick].classList.add('slider__step-active')
    this.sliderThumb.style.left = `${locationClick / this.segments * 100}%`
    this.sliderProgress.style.width = `${locationClick / this.segments * 100}%`


    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: locationClick,
      bubbles: true
    }))
  }
}
