
function initCarousel() {
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  let maxLength = document.querySelectorAll('.carousel__slide').length;
  const carouselInner = document.querySelector('.carousel__inner');
  let widthCarousel = carouselInner.offsetWidth;
  let count = 0;
  let transformLength = widthCarousel;
  arrowLeft.style.display = 'none';

  arrowRight.addEventListener('click', () => {
    if (count == 0) {
      if(transformLength == 0) transformLength = widthCarousel;
      carouselInner.style.transform = `translateX(-${widthCarousel}px)`
      count++
      arrowLeft.style.display = '';
    } else {
      count++
      transformLength += widthCarousel;
      carouselInner.style.transform = `translateX(-${transformLength}px)`
      if (count >= maxLength -1) {
        arrowRight.style.display = 'none'
      }
    }
  })

  arrowLeft.addEventListener('click', () => {
    count--
    if(count < maxLength - 1) arrowRight.style.display = '';
    if(count == 0) arrowLeft.style.display = 'none';
    transformLength -= widthCarousel;
    carouselInner.style.transform = `translateX(-${transformLength}px)`
  })
}
