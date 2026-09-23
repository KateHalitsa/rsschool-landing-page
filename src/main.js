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