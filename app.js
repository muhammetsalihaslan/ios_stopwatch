const screen = document.querySelector('.screen');
const laps = document.querySelector('.laps');

let msec = 0;
let sec = 0;
let min = 0;
let timer;

function getCurrent() {
    return (min < 10 ? '0' + min : min) + ":" + (sec < 10 ? '0' + sec : sec) + ":" + (msec < 10 ? '0' + msec : msec);
}

function startTimer() {
    if(!timer){
        timer = setInterval(run, 10)
     }
    }

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function resetTimer() {
    clearInterval(timer);
    timer = false;
    msec = 0;
    sec = 0;
    min = 0;
    screen.textContent = getCurrent();
    laps.innerHTML = '';

}

function tourTime() {
    if(timer){
        let li = document.createElement('li');
        li.innerText = getCurrent();
        laps.appendChild(li);
    }
}

function run() {
    screen.textContent = getCurrent();
    msec++;
    if (msec == 100){
        msec = 0;
        sec++;
    }
    if(sec == 60){
        sec = 0;
        min++;
    }
    
}








