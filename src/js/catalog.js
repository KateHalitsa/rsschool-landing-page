import data from '../data/shows.json'; 
export const exportedArray = data;
function addMore(){
const descriptions = document.querySelectorAll('.description');

descriptions.forEach((description) => {
    const button = description.querySelector('.description__button');

    button.addEventListener('click', () => {
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
            return `<div class="card ${i>=6?'hidden':""}">
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
                    <button class="buy"> Buy </button>
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



