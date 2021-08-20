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
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body')
}

refs.start.addEventListener('click', onStartBtn);
refs.stop.addEventListener('click', onStopBtn);

function onStartBtn() {
  id = setInterval(colorBodyBkg, 1000);
  refs.start.disabled = true;
}

function onStopBtn() {
  clearInterval(id);
  refs.start.disabled = false;
}

function colorBodyBkg() {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = color;
}