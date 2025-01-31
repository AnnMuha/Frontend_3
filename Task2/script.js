class Timer {
    constructor(hours, minutes, seconds, displayId) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.displayId = displayId;
        this.intervalId = null;
    }

    formatTime() {
        return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
    }

    updateDisplay() {
        document.getElementById(this.displayId).textContent = this.formatTime();
    }

    start() {
        if (this.intervalId) return;

        this.intervalId = setInterval(() => {
            if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
                this.stop();
                return;
            }
            this.updateTime();
            this.updateDisplay();
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    reset(hours, minutes, seconds) {
        this.stop();
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.updateDisplay();
    }

    updateTime() {
        if (this.seconds === 0) {
            if (this.minutes === 0) {
                if (this.hours > 0) {
                    this.hours--;
                    this.minutes = 59;
                }
            } else {
                this.minutes--;
            }
            this.seconds = 59;
        } else {
            this.seconds--;
        }
    }
}

const timers = [
    new Timer(1, 0, 0, 'timer1-display'),
    new Timer(0, 30, 0, 'timer2-display'),
    new Timer(0, 10, 0, 'timer3-display')
];