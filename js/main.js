import { checkYear, checkMonth, checkDay, checkHour, checkMinute, checkSecond, checkAll } from './options/checkOptions.js';

const year = document.querySelector('#year-input');
const month = document.querySelector('#month-input');
const day = document.querySelector('#day-input');
const hour = document.querySelector('#hour-input');
const minute = document.querySelector('#minute-input');
const second = document.querySelector('#second-input');
const options = document.querySelector('#options');

const startButton = document.querySelector('#start-button');

year.onchange = checkYear;
month.onchange = checkMonth;
day.onchange = checkDay;
hour.onchange = checkHour;
minute.onchange = checkMinute;
second.onchange = checkSecond;

options.onchange = checkAll;

startButton.addEventListener('click', () => {
    const countingTo = document.querySelector('#date');
    const countdownYears = document.querySelector('#years');
    const countdownMonths = document.querySelector('#months');
    const countdownDays = document.querySelector('#days');
    const countdownHours = document.querySelector('#hours');
    const countdownMinutes = document.querySelector('#minutes');
    const countdownSeconds = document.querySelector('#seconds');

    setInterval(() => {
        const diff = new Date(year.value, month.value - 1, day.value, hour.value, minute.value, second.value).getTime() - new Date().getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        countdownYears.innerHTML = years;
        countdownMonths.innerHTML = months % 12;
        countdownDays.innerHTML = days % 30;
        countdownHours.innerHTML = hours % 24;
        countdownMinutes.innerHTML = minutes % 60;
        countdownSeconds.innerHTML = seconds % 60;
    }, 1000)

    countingTo.innerHTML = `Counting to <strong>${("0" + day.value).slice(-2)}.${("0" + month.value).slice(-2)}.${year.value} ${("0" + hour.value).slice(-2)}:${("0" + minute.value).slice(-2)}:${("0" + second.value).slice(-2)}</strong>`;
})


