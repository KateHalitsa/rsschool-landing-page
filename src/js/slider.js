

const sliderLine = document.querySelector('.slider-line');
const slides = document.querySelectorAll('.slider-img');
const btnPrev = document.querySelector('.prev.controlls');
const btnNext = document.querySelector('.next.controlls');

let currentIndex = 0;
const totalSlides = slides.length;


function updateSlider() {
  sliderLine.style.transform = `translateX(${-currentIndex * calculateWidth()}px)`;
}

btnNext.addEventListener('click', () => {
  currentIndex++;
  
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  
  updateSlider();
});

btnPrev.addEventListener('click', () => {
  currentIndex--;
  
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  
  updateSlider();
});
function calculateWidth() {
    const result = Math.min(500, window.innerWidth - 40);
    return result;
}
function handleSliderLayout() {
    const newWidth = calculateWidth(); 
    updateSlider(newWidth);
}


handleSliderLayout();

window.addEventListener('resize', handleSliderLayout);
