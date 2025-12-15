let countdown;
let timeRemaining;

document.getElementById('start').addEventListener('click', function() {
    const timeInput = document.getElementById('timeInput').value;
    timeRemaining = parseInt(timeInput);

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("Please Enter a Number");
        return;
    }

    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = `Time Remaining: ${timeRemaining}s`;
    
    document.getElementById('pause').disabled = false;
    document.getElementById('reset').disabled = false;
    document.getElementById('play').disabled = true;
    this.disabled = true;

    startCountdown();
});

document.getElementById('pause').addEventListener('click', function() {
    clearInterval(countdown);
    document.getElementById('start').disabled = false;
    this.disabled = true;
    document.getElementById('play').disabled = false;
});

document.getElementById('play').addEventListener('click', function() {
    startCountdown();
    document.getElementById('pause').disabled = false;
    this.disabled = true;
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(countdown);
    timeRemaining = 0;
    document.getElementById('timerDisplay').textContent = 'Time Remaining: 0s';
    document.getElementById('start').disabled = false;
    this.disabled = true;
    document.getElementById('pause').disabled = true;
    document.getElementById('play').disabled = true;
});

function startCountdown() {
    countdown = setInterval(() => {
        timeRemaining--;
        document.getElementById('timerDisplay').textContent = `Time Remaining: ${timeRemaining}s`;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            document.getElementById('timerDisplay').textContent = 'Time Remaining: 0s';
            document.getElementById('reset').disabled = false;
            document.getElementById('play').disabled = true;
        }
    }, 1000);
}

