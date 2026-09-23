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
console.log('Элемент option:', option); 

console.log('Текст внутри:', option[0]?.innerText);

const category= option[0].innerText.toLowerCase();
        const shows = exportedArray.filter(show => show.category === category);
const listElement = document.querySelector('.shows');

        const htmlContent = shows.map(show => {
            return `<div class="card">
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
}
addCards();
addMore();