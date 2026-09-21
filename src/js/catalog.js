const descriptions = document.querySelectorAll('.description');

descriptions.forEach((description) => {
    const button = description.querySelector('.description__button');

    button.addEventListener('click', () => {
        description.classList.toggle('description--expanded');

        const isExpanded = description.classList.contains('description--expanded');

        button.textContent = isExpanded ? 'Less':'More';
    });
});
const options = document.querySelectorAll('.option');

options.forEach((option) => {
    option.addEventListener('click', () => {
        options.forEach((item) => {
            item.classList.remove('active');
        });

        option.classList.add('active');
    });
});
