const weather = new Weather('Warrenton', 'VA');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(res => ui.paint(res))
    .catch(err => console.log(err));
}
