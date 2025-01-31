const timers = [
    { hours: 1, minutes: 0, seconds: 0, intervalId: null, displayId: 'timer1-display' },
    { hours: 0, minutes: 30, seconds: 0, intervalId: null, displayId: 'timer2-display' },
    { hours: 0, minutes: 10, seconds: 0, intervalId: null, displayId: 'timer3-display' }
];

function formatTime(hours, minutes, seconds) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateDisplay(timerIndex) {
    const timer = timers[timerIndex];
    document.getElementById(timer.displayId).textContent = formatTime(timer.hours, timer.minutes, timer.seconds);
}

function startTimer(timerIndex) {
    const timer = timers[timerIndex];
    if (timer.intervalId) return;  // перевіряє, чи вже працює цей таймер (intervalId не має бути null).

    timer.intervalId = setInterval(() => {
        if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
            stopTimer(timerIndex);  // зупиняємо таймер при досягненні 00:00:00
            return;
        }
        if (timer.seconds === 0) {
            if (timer.minutes === 0) {
                if (timer.hours > 0) {
                    timer.hours--;
                    timer.minutes = 59;
                }
            } else {
                timer.minutes--;
            }
            timer.seconds = 59;
        } else {
            timer.seconds--;
        }
        updateDisplay(timerIndex);
    }, 1000);
}

function stopTimer(timerIndex) {
    const timer = timers[timerIndex];
    clearInterval(timer.intervalId);
    timer.intervalId = null;
}

function resetTimer(timerIndex, hours, minutes, seconds) {
    stopTimer(timerIndex);
    const timer = timers[timerIndex];
    timer.hours = hours;
    timer.minutes = minutes;
    timer.seconds = seconds;
    updateDisplay(timerIndex);
}