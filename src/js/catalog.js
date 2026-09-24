import data from '../data/shows.json'; 
export const exportedArray = data;
function addMore(){
const descriptions = document.querySelectorAll('.description');

descriptions.forEach((description) => {
    const button = description.querySelector('.description__button');

    button.addEventListener('click', (event) => {
        event.stopPropagation();
        description.classList.toggle('description--expanded');

        const isExpanded = description.classList.contains('description--expanded');

        button.textContent = isExpanded ? 'Less':'More';
    });
});}
const options = document.querySelectorAll('.option');
const others = document.querySelector('.others');
others.addEventListener('click', () => {
const elements = document.querySelectorAll('.hidden');
  elements.forEach(element=>element.classList.remove('hidden'));
  others.style.display="none";
})

options.forEach((option) => {
    option.addEventListener('click', () => {
        options.forEach((item) => {
            item.classList.remove('active');
        });

        option.classList.add('active');
        addCards();
        addMore();       
})});
function addCards(){
const option= document.querySelectorAll('.option.active');

const category= option[0].innerText.toLowerCase();
const shows = exportedArray.filter(show => show.category === category);
const listElement = document.querySelector('.shows');

        const htmlContent = shows.map((show,i )=> {
            return `<div class="card ${i>=6?'hidden':""}" data-show="${show.title}">
                    <img src="${show.image}" alt="${show.alt}">
                    <div class="description">
                      <div class="description__text">
                        <p>
                        ${show.description}
                        </p>
                      </div>
                      <button class="description__button" type="button">
                          More
                      </button>
                    </div>
                    <table>
                    ${show.schedule.map(day => `<tr>
                                                  <td><div class="date">${day.date}</div></td>
                                                  <td>${day.times.map(time =>`<div>${time}</div>`).join('')}</td>
                                                </<tr>`).join('')}
                    </table>
                    <button class="buy" id="openModalBtn"> Buy </button>
                  </div>
`;
        }).join('');

        listElement.innerHTML = htmlContent;
         if (shows.length > 6) {
        others.style.display = '';
    } else {
        others.style.display = 'none';
    }
}
addCards();
addMore();
const showsContainer = document.querySelector('.shows');
const modal = document.querySelector('#booking-modal');

showsContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.card');
    
    if (!button) {
        return;
    }

    const card = button.closest('.card');
    const title = card.dataset.show;

    const show = exportedArray.find(item => item.title === title);

    if (!show) {
        return;
    }

    openModal(show);
});
const closeBtn = modal.querySelector('.modal__close');
const backdrop = modal.querySelector('.modal__overlay');
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
function openModal() {
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}



window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});





