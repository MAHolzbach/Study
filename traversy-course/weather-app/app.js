const weather = new Weather('Warrenton', 'VA');

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
