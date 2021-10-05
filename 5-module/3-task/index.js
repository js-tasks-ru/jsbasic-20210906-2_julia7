
function initCarousel() {
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  let maxlength = document.querySelectorAll('.carousel__slide').length;
  const carouselInner = document.querySelector('.carousel__inner');
  let widthCarousel = carouselInner.offsetWidth;
  let count = 0;
  let tranformLength = widthCarousel;
  arrowLeft.style.display = 'none';

  arrowRight.addEventListener('click', () => {
    if (count == 0) {
      if(tranformLength == 0) tranformLength = widthCarousel;
      carouselInner.style.transform = `translateX(-${widthCarousel}px)`
      count++
      arrowLeft.style.display = '';
    } else {
      count++
      tranformLength += widthCarousel;
      carouselInner.style.transform = `translateX(-${tranformLength}px)`
      if (count >= maxlength -1) {
        arrowRight.style.display = 'none'
      }
    }
  })

  arrowLeft.addEventListener('click', () => {
    count--
    if(count < maxlength - 1) arrowRight.style.display = '';
    if(count == 0) arrowLeft.style.display = 'none';
    tranformLength -= widthCarousel;
    carouselInner.style.transform = `translateX(-${tranformLength}px)`
  })
}
