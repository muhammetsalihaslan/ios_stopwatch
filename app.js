const screen = document.querySelector('.screen');
const laps = document.querySelector('.laps');

let msec = 0;
let sec = 0;
let min = 0;
let timer;

function startTimer() {
    if(!timer){
        timer = setInterval(run, 10)
     }
    }

function run() {
    screen.textContent = (min < 10 ? '0' + min : min) + ":" + (sec < 10 ? '0' + sec : sec) + ":" + (msec < 10 ? '0' + msec : msec);
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








