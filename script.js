let startTime;
let elapsedTime = 0;
let timerInterval;

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    document.getElementById("start").disabled = true;
}

function stop() {
    clearInterval(timerInterval);
    document.getElementById("start").disabled = false;
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = '';
    document.getElementById("start").disabled = false;
}

function lap() {
    const lapTime = document.createElement('li');
    lapTime.innerText = formatTime(elapsedTime);
    document.getElementById("laps").appendChild(lapTime);
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").innerText = formatTime(elapsedTime);
}

function formatTime(ms) {
    let time = new Date(ms);
    let minutes = String(time.getUTCMinutes()).padStart(2, '0');
    let seconds = String(time.getUTCSeconds()).padStart(2, '0');
    let milliseconds = String(time.getUTCMilliseconds()).padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);
