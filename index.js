const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let id = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startButton: document.querySelector('[data-action="start"]'),
    stopButton: document.querySelector('[data-action="stop"]'),
    allScreen: document.querySelector('body')
};

refs.startButton.addEventListener('click', onStart);
refs.stopButton.addEventListener('click', onStop);

function onStart() {
    timerId = setInterval(paintHandler, 1000);
    refs.startButton.removeEventListener('click', onStart);
};

function onStop() {
    clearInterval(timerId);
    refs.startButton.addEventListener('click', onStart);
};

function paintHandler() {
    const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.allScreen.style.backgroundColor = color;
}