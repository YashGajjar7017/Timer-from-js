const StartingMinutes = 10;
let time = StartingMinutes * 60;
const countdownEL = document.getElementById('countdown');

setInterval(updateCountDown ,1000);
function updateCountDown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0'+ seconds : seconds;
    countdownEL.innerHTML = `${minutes}: ${seconds}`;
    time--;
}