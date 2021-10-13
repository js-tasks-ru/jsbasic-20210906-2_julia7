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
      </div>
    </div>
    `
    this.elem = createElement(this.template)
    this.stepsSlider = this.elem.querySelector('.slider__steps')

    for(let i = 0; i < steps; i++) {
      this.stepsSlider.innerHTML += '<span></span>'
    }

    this.elem.addEventListener('click', (event) => {
      console.log(event)
      let left = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
      console.log('LEFT '+left)
    })
  }
}
