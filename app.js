const timerDayEl = document.querySelector('timer__day');
const timerHourEl = document.querySelector('timer__hour');
const timerMinEl = document.querySelector('timer__min');
const timerSecEl = document.querySelector('timer__sec');

function getTimeDifference(start,end){
    let miliseconds = Math.floor(end - start);
    let seconds = Math.floor(miliseconds/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    hours = hours - (days*24);
    minutes = minutes - (days * 24 * 60 ) - (hours *60);
    seconds = seconds - (days * 24 * 60 *60) - (hours * 60 * 60) - (minutes * 60);
    //return `${days} ${hours} ${minutes} ${seconds}`;
    return {
        rDays: days,
        rHours: hours,
        rMinutes: minutes,
        rSeconds : seconds
    }

}

let timer = setInterval(function(){
    const startDate = new Date();
    const endDate = new Date('Jan 1, 2019');
    let timeDifference = getTimeDifference(startDate, endDate);
    timerDayEl.textContent = timeDifference.rDays;
    timerHourEl.textContent = timeDifference.rHours;
    timerMinEl.textContent = timeDifference.rMinutes;
    timerSecEl.textContent = timeDifference.rSeconds;
},1000)
