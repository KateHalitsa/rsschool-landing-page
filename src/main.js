import './style.scss'
import './styles/header.scss'
import './styles/hero.scss'


/*document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    
  </div>
  <div>
    

<div class="ticks"></div>

<section id="next-steps">
  
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))
*/

const themeButton = document.querySelector('#theme-button');

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.body.dataset.theme = savedTheme;
} else {
    document.body.dataset.theme = 'light';
}

themeButton.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme;

    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
});

const burger = document.getElementById("burger")
const nav = document.getElementById("nav")
const html = document.documentElement;
burger.addEventListener("click", function () {
  nav.classList.toggle("nav--active")
  burger.classList.toggle("burger--active")
  document.body.classList.toggle("stop-scroll")
  html.classList.toggle("stop-scroll")
})


function closeMenu(){
  nav.classList.remove("nav--active");
        burger.classList.remove("burger--active");
        document.body.classList.remove("stop-scroll");
        html.classList.remove("stop-scroll");
}
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu()
    });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('nav--active')) {
   closeMenu();
  }
});



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
