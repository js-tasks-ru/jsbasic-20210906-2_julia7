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

      this.stepSlider.forEach(step => {
        step.classList.remove('slider__step-active')
      })

      this.stopPointer(event)
    })

    this.sliderThumb.style.left = `${value / this.segments * 100}%`
    this.sliderProgress.style.width = `${value / this.segments * 100}%`

    this.sliderThumb.ondragstart = () => false;

    this.sliderThumb.addEventListener('pointerdown', () => {
      this.elem.classList.add('slider_dragging')

      this.stepSlider.forEach(step => {
        step.classList.remove('slider__step-active')
      })

      this.elem.addEventListener('pointermove', this.movePointer)

      this.elem.addEventListener('pointerup', (event) => {
        this.elem.classList.remove('slider_dragging')
        this.elem.removeEventListener('pointermove',this.movePointer)
        this.stopPointer(event)
      }, {once: true})
    })
  }

  movePointer = (event) => {
    let moveLocation = ((event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth) * this.segments;
    moveLocation = moveLocation > 4 ? 4 : moveLocation < 0 ? 0 : moveLocation
    this.elem.querySelector('.slider__value').innerHTML = Math.round(moveLocation)
    this.sliderThumb.style.left = `${moveLocation / this.segments * 100}%`
    this.sliderProgress.style.width = `${moveLocation / this.segments * 100}%`
  }

  stopPointer(event) {
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
