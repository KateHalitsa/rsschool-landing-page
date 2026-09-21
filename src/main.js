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