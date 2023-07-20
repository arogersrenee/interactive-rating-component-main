window.onload = reload;

const rateState = document.getElementById("rate-state");
const finalState = document.getElementById("final-state");
const ratingSelection = document.getElementById("rating-selection");
const submitButton = document.getElementById("submit");
const rates = document.querySelectorAll('button');

const ratingOne = document.getElementById("1");
const ratingTwo = document.getElementById("2");
const ratingThree = document.getElementById("3");
const ratingFour = document.getElementById("4");
const ratingFive = document.getElementById("5");

submitButton.addEventListener('click', () => {
    rateState.classList.add('hidden');
    finalState.classList.remove('hidden');
})

function reload() {
    finalState.classList.add('hidden');
}

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        ratingSelection.innerText = rate.innerText;
    })
})