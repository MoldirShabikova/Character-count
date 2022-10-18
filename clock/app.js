const timer = document.querySelector('.timerContainer')

const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const pause = document.querySelector('#pause')

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

start.addEventListener('click', ()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000)
    }
})

reset.addEventListener('click', ()=>{
    paused =true;
clearInterval(intervalId)
     startTime = 0;
 elapsedTime = 0;
 currentTime = 0;

 hours=0;
 minutes = 0;
 seconds = 0;
 timer.textContent = '00:00:00'
})

pause.addEventListener('click', ()=>{
    if(!paused){
        paused =true
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId)
    }
    
})

function updateTime(){
    elapsedTime = Date.now() - startTime
    seconds = Math.floor((elapsedTime / 1000) % 60)
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
    hours= Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

    seconds = pad(seconds)
    minutes = pad(minutes)
    hours = pad(hours)
    
    timer.textContent = `${hours}:${minutes}:${seconds}`
    function pad(unit){
        return (('0') + unit).length > 2? unit : '0' + unit;
    }
}