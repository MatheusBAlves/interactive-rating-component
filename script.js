const form = document.querySelector('form');
const mainContainer = document.querySelector('main.container');
const secondContainer = document.querySelector('.container.second');
const rate = document.querySelector('.container__raiting span');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    mainContainer.classList.add('hidden');
    secondContainer.classList.remove('hidden');
    rate.innerHTML = document.querySelector(
        'input[type="radio"]:checked'
    ).value;
});
