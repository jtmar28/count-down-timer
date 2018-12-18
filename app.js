const timerDayEl = document.querySelector('.timer__day');
const timerHourEl = document.querySelector('.timer__hour');
const timerMinEl = document.querySelector('.timer__min');
const timerSecEl = document.querySelector('.timer__sec');

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
    const endDate = new Date('Dec 17, 2018 21:53:19');
    let timeDifference = getTimeDifference(startDate, endDate);
    if(timeDifference.rDays.toString().length === 1){
        timerDayEl.textContent = `0${timeDifference.rDays}`;
    }else{
        timerDayEl.textContent = timeDifference.rDays;
    }
    if(timeDifference.rHours.toString().length === 1){
        timerHourEl.textContent = `0${timeDifference.rHours}`;
    }else{
        timerHourEl.textContent = timeDifference.rHours;
    }
    if(timeDifference.rMinutes.toString().length === 1){
        timerMinEl.textContent = `0${timeDifference.rMinutes}`;
    }
    else{
        timerMinEl.textContent = timeDifference.rMinutes;
    }
    if(timeDifference.rSeconds.toString().length === 1){
        timerSecEl.textContent = `0${timeDifference.rSeconds}`;
    }else{
        timerSecEl.textContent = timeDifference.rSeconds;
    }
    if(timeDifference.rDays === 0 && timeDifference.rHours === 0 && timeDifference.rMinutes ===0 && timeDifference.rSeconds ===0){
        clearInterval(timer);
    }
},1000)
