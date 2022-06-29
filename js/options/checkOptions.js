import { displayError, clearError } from '../misc/errorManagement.js';
import { renderOptions } from './renderOptions.js';

const year = document.querySelector('#year-input');
const month = document.querySelector('#month-input');
const day = document.querySelector('#day-input');
const hour = document.querySelector('#hour-input');
const minute = document.querySelector('#minute-input');
const second = document.querySelector('#second-input');

const yearError = document.querySelector('#year-error');
const monthError = document.querySelector('#month-error');
const dayError = document.querySelector('#day-error');
const hourError = document.querySelector('#hour-error');
const minuteError = document.querySelector('#minute-error');
const secondError = document.querySelector('#second-error');

const yearLabel = document.querySelector('#year-label');
const monthLabel = document.querySelector('#month-label');
const dayLabel = document.querySelector('#day-label');
const hourLabel = document.querySelector('#hour-label');
const minuteLabel = document.querySelector('#minute-label');
const secondLabel = document.querySelector('#second-label');

const startButton = document.querySelector('#start-button');

function checkYear() {
    if(year.value === '') return displayError(year, yearError, 'Year must be filled out.');
    else if(year.value < 0) return displayError(year, yearError, 'Year must be positive.');
    else if(year.value < new Date().getFullYear()) return displayError(year, yearError, 'Year must be greater than or equal to current year.');
    else clearError(year, yearError);

    month.disabled = false;
    monthLabel.innerHTML = 'Month';
}

function checkMonth() {
    if(month.value === '') return displayError(month, monthError, 'Month must be filled out.');
    else if(year.value == new Date().getFullYear() && month.value < new Date().getMonth() + 1) return displayError(month, monthError, 'Month must be less than or equal to current month.');
    else clearError(month, monthError);

    day.disabled = false;
    dayLabel.innerHTML = 'Day';
    const daysInMonth = new Date(year.value, month.value, 0).getDate();

    renderOptions(day, daysInMonth, 1);
}

function checkDay() {
    if(day.value === '') return displayError(day, dayError, 'Day must be filled out.');
    else if(year.value == new Date().getFullYear() && month.value == new Date().getMonth() + 1 && day.value < new Date().getDate()) return displayError(day, dayError, 'Day must be less than or equal to current day.');
    else clearError(day, dayError);

    hour.disabled = false;
    hourLabel.innerHTML = 'Hour';

    renderOptions(hour, 24);
}

function checkHour() {
    if(hour.value === '') return displayError(hour, hourError, 'Hour must be filled out.');
    else if(year.value == new Date().getFullYear() && month.value == new Date().getMonth() + 1 && day.value == new Date().getDate() && hour.value < new Date().getHours()) return displayError(hour, hourError, 'Hour must be less than or equal to current hour.');
    else clearError(hour, hourError);

    minute.disabled = false;
    minuteLabel.innerHTML = 'Minute';
    
    renderOptions(minute, 60);
}

function checkMinute() {
    if(minute.value === '') return displayError(minute, minuteError, 'Minute must be filled out.');
    else if(year.value == new Date().getFullYear() && month.value == new Date().getMonth() + 1 && day.value == new Date().getDate() && hour.value == new Date().getHours() && minute.value < new Date().getMinutes()) return displayError(minute, minuteError, 'Minute must be less than or equal to current minute.');
    else clearError(minute, minuteError);

    second.disabled = false;
    secondLabel.innerHTML = 'Second';

    renderOptions(second, 60);
}

function checkSecond() {
    if(second.value === '') return displayError(second, secondError, 'Second must be filled out.');
    else if(year.value == new Date().getFullYear() && month.value == new Date().getMonth() + 1 && day.value == new Date().getDate() && hour.value == new Date().getHours() && minute.value == new Date().getMinutes() && second.value < new Date().getSeconds()) return displayError(second, secondError, 'Second must be less than or equal to current second.');
    else clearError(second, secondError);

    startButton.disabled = false;
}

function checkAll() {
    if(year.value != "") checkYear();
    if(month.value != "") checkMonth();
    if(day.value != "") checkDay();
    if(hour.value != "") checkHour();
    if(minute.value != "") checkMinute();
    if(second.value != "") checkSecond();

    if(year.parentElement.classList.contains('error')) return setBackToNormal([month, day, hour, minute, second], [monthLabel, dayLabel, hourLabel, minuteLabel, secondLabel]);
    if(month.parentElement.classList.contains('error')) return setBackToNormal([day, hour, minute, second], [dayLabel, hourLabel, minuteLabel, secondLabel]);
    if(day.parentElement.classList.contains('error')) return setBackToNormal([hour, minute, second], [hourLabel, minuteLabel, secondLabel]);
    if(hour.parentElement.classList.contains('error')) return setBackToNormal([minute, second], [minuteLabel, secondLabel]);
    if(minute.parentElement.classList.contains('error')) return setBackToNormal([second], [secondLabel]);
}

function setBackToNormal(elements, labels) {
    elements.forEach((element, index) => {
        element.disabled = true;
        element.value = "";
        labels[index].innerHTML = `${element.nodeName.charAt(0).toUpperCase() + element.nodeName.slice(1).toLowerCase()} ${element.name} first`;
        
        element.parentElement.classList.remove('error');
        document.querySelector(`#${element.name}-error`).innerHTML = '';
    })
    startButton.disabled = true;
}

export { checkYear, checkMonth, checkDay, checkHour, checkMinute, checkSecond, checkAll };